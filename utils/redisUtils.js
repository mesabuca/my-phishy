const { Queue, Bull } = require('bull')

const redisConfig = require('../config/redisConf.json')[process.env.NODE_ENV || 'development'];

exports.addCampaignQueue = async (campaignId, data) => {
    const bullQueue = new Bull(`campaigns`, { redis: redisConfig });
    try {
        const existingJob = await bullQueue.getJob(campaignId);

        if (existingJob) {
            await existingJob.remove();
        }

        await bullQueue.add(data, { jobId: campaignId, delay: Number.MAX_SAFE_INTEGER });

        console.log(`Data sent to queue for Campaign ID: ${campaignId}`);
    } catch (error) {
        console.error('Error adding data to queue:', error);
    }
};

exports.setCampaignScheduleData = async (campaignId, delay) => {
    const bullQueue = new Bull('campaigns', { redis: redisConfig });
    try {
        const existingJob = await bullQueue.getJob(campaignId);

        if (existingJob) {
            await existingJob.remove();
        }

        await bullQueue.add(existingJob.data, { jobId: campaignId, delay });

        console.log(`Data sent to queue for Campaign ID: ${campaignId}`);
    } catch (error) {
        console.error('Error adding data to queue:', error);
    }
};

// exports.checkConnection = async () => {
//     const myQueue = new Queue('test', { redis: redisConfig });
//     let err = null
//     myQueue.client.ping((err, result) => {
//         if (err) {
//           console.error('Unable to connect to the Redis server:', err);
//         } else {
//           console.log('Connected to Redis:', result);
//         }
//       });
//     return err
// }