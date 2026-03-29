const Idempotency = require('../models/idempotency');

const idempotencyMiddleware = async (req, res, next) => {
    // Only apply idempotency to state-changing requests
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
        return next();
    }

    const idempotencyKey = req.headers['x-idempotency-key'];

    // If no key is provided, bypass the idempotency check
    if (!idempotencyKey) {
        return next();
    }

    try {
        // Check if a request with this key was already processed
        const existingRecord = await Idempotency.findOne({ key: idempotencyKey });

        if (existingRecord) {
            console.log(`Idempotency hit! Returning cached response for key: ${idempotencyKey}`);
            return res.status(existingRecord.statusCode).json(existingRecord.response);
        }

        // Store the original res.json method
        const originalJson = res.json;

        // Override res.json to capture the response before it's sent
        res.json = function(data) {
            // Restore the original res.json behavior to prevent recursion
            res.json = originalJson;

            // Save the response asynchronously
            // We only save successful responses (2xx and maybe 4xx client errors)
            // if we don't want to retry 5xx server errors next time
            if (res.statusCode >= 200 && res.statusCode < 500) {
                const record = new Idempotency({
                    key: idempotencyKey,
                    response: data,
                    statusCode: res.statusCode
                });
                
                record.save().catch(err => console.error("Could not save idempotency record:", err));
            }

            // Continue sending the response natively
            return res.json.call(this, data);
        };

        next();
    } catch (error) {
        console.error("Idempotency middleware error:", error);
        next();
    }
};

module.exports = idempotencyMiddleware;
