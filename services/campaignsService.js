const { Campaign, Target } = require('../models');
const redisUtils = require('../utils/redisUtils');


exports.getAllCampaigns = async () => {
  return Campaign.findAll();
};

exports.getCampaignById = async (campaignId) => {
  return Campaign.findByPk(campaignId);
};

exports.createCampaign = async (data) => {
  return Campaign.create(data);
};

exports.updateCampaign = async (campaignId, data) => {
  const campaign = await Campaign.findByPk(campaignId);

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  return campaign.update(data);
};

exports.deleteCampaign = async (campaignId) => {
  const campaign = await Campaign.findByPk(campaignId);

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  return campaign.destroy();
};

exports.addTargetToCampaign = async (campaignId, targetId) => {
  try {
    const campaign = await Campaign.findByPk(campaignId, { include: 'targets' });

    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const targetToAdd = await Target.findByPk(targetId);

    await campaign.addTarget(targetToAdd);

    return { message: 'Targets added to campaign successfully', targets: targetToAdd };
  } catch (error) {
    console.log(error);
    throw new Error('Error adding targets to campaign');
  }
};

exports.launchCampaign = async (campaignId) => {
  try {
    const campaign = await Campaign.findByPk(campaignId, { include: 'targets' });
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const targetData = campaign.targets.map(target => {
      const { fullName, email } = target;
      return { fullName, email };
    });

    await redisUtils.addCampaignQueue(campaignId, targetData);
    // await redisUtils.addCampaignQueue('sendCampaignEmails', { campaignId, targetIds });

    return { message: 'Campaign launched successfully' };
  } catch (error) {
    throw error;
  }
};

exports.scheduleCampaign = async (campaignId, scheduledTime) => {
  // "2024-01-22T10:04:00.000Z"
  const scheduledTimeDate = new Date(scheduledTime).getTime()
  const delay =  scheduledTimeDate - new Date().getTime();
  console.log(delay);
  console.log(new Date());
  try {
      await redisUtils.setCampaignScheduleData(campaignId, delay);
  } catch (error) {
    console.error('Kampanya verisi güncelleme hatası:', error);
  }
}