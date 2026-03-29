const amqp = require('amqplib');

let connection, channel;

/**
 * Configure and connect to the RabbitMQ server.
 */
const connectQueue = async () => {
    try {
        const rabbitMqUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
        connection = await amqp.connect(rabbitMqUrl);
        channel = await connection.createChannel();
        
        console.log('Successfully connected to RabbitMQ Message Queue.');
        
        // Assert the main operational queues the application might need
        await channel.assertQueue('email-queue', { durable: true });
        await channel.assertQueue('garbage-processing-queue', { durable: true });
        
    } catch (error) {
        console.error('Failed to connect to RabbitMQ:', error.message);
        console.warn('Background tasks depending on the message queue will fail unless MQ is running.');
    }
};

/**
 * Publish a message to a specific queue.
 * @param {string} queueName - Name of the target queue
 * @param {object} data - Data to send as a JSON object
 */
const publishToQueue = async (queueName, data) => {
    try {
        if (!channel) {
            console.error('No RabbitMQ channel established. Dropping message.');
            return false;
        }
        
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), {
            persistent: true // Ensure messages survive broker restarts
        });
        
        return true;
    } catch (error) {
        console.error(`Failed to publish to ${queueName}:`, error);
        return false;
    }
};

/**
 * Consume messages from a specific queue.
 * @param {string} queueName - Name of the target queue
 * @param {Function} callback - Callback to execute on message receipt
 */
const consumeFromQueue = async (queueName, callback) => {
    try {
        if (!channel) {
            console.error('No RabbitMQ channel established. Cannot bind consumer.');
            return;
        }

        channel.consume(queueName, (msg) => {
            if (msg !== null) {
                const data = JSON.parse(msg.content.toString());
                callback(data);
                channel.ack(msg); // Acknowledge completion
            }
        });
    } catch (error) {
        console.error(`Failed to consume from ${queueName}:`, error);
    }
};

module.exports = {
    connectQueue,
    publishToQueue,
    consumeFromQueue
};
