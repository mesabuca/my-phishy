const { Worker, Queue } = require('bull');
const Redis = require('ioredis');

const redisConfig = {
  // Redis bağlantı ayarları
  port: 6379, // Varsayılan Redis portu
  host: 'localhost', // Redis sunucu adresi
};

const connection = new Redis(redisConfig);

exports.createBullQueue = () => {
  return new Queue('campaignQueue', { connection });
};

const sendCampaignEmails = async (job) => {
  // job verilerini kullanarak kampanya e-postalarını gönder
  const { campaignId, targetIds } = job.data;
  // Burada e-posta gönderme işlemleri gerçekleştirilir

  console.log(`Campaign ${campaignId} emails sent to targets: ${targetIds}`);
};

const worker = new Worker('campaignQueue', sendCampaignEmails, { connection });
