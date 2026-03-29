const { consumeFromQueue } = require('../helper/mqService');

/**
 * Initialize all message queue background workers/consumers.
 * This runs in a non-blocking asynchronous event loop allowing the API to return fast
 * while heavy processing like sending emails or processing chunks of data happens here.
 */
const initializeWorkers = async () => {
    
    // Note: We assign a slight timeout to ensure the RabbitMQ connection is established first
    setTimeout(() => {
        console.log("Starting Messaging Queue Workers...");

        // 1. Worker for handling async Emails (e.g., Welcome Emails, Notifications)
        consumeFromQueue('email-queue', (messageData) => {
            console.log(`[MQ:Worker] Processing email for ${messageData.email}`);
            // Logic to send out an email would go here using nodemailer, sendgrid etc.
            // Example delay to simulate sending an email:
            setTimeout(() => {
                console.log(`[MQ:Worker] ✔ Successfully dispatched email to ${messageData.email}`);
            }, 1000);
        });

        // 2. Worker for processing heavy garbage collection schedules
        consumeFromQueue('garbage-processing-queue', (messageData) => {
            console.log(`[MQ:Worker] Computing optimal route for Area: ${messageData.area}`);
            
            // Logic regarding sorting drivers, locations etc. 
            setTimeout(() => {
                console.log(`[MQ:Worker] ✔ Finished computations for area: ${messageData.area}`);
            }, 2500);
        });

    }, 2000); // 2 second delay to ensure MQ finishes async handshake locally
};

module.exports = { initializeWorkers };
