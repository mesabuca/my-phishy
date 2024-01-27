
const campaignsService = require('../services/campaignsService');

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await campaignsService.getAllCampaigns();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaignById = async (req, res) => {
  const campaignId = req.params.id;

  try {
    const campaign = await campaignsService.getCampaignById(campaignId);
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCampaign = async (req, res) => {
  const data = req.body;

  try {
    const newCampaign = await campaignsService.createCampaign(data);
    res.json(newCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCampaign = async (req, res) => {
  const campaignId = req.params.id;
  const data = req.body;

  try {
    const updatedCampaign = await campaignsService.updateCampaign(campaignId, data);
    res.json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  const campaignId = req.params.id;

  try {
    await campaignsService.deleteCampaign(campaignId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addTargetToCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const { targetId } = req.body;

    const result = await campaignsService.addTargetToCampaign(campaignId, targetId);

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.launchCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;

    const result = await campaignsService.launchCampaign(campaignId);

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.scheduleCampaign = async (req, res) => {
  const { campaignId } = req.params;
  const { scheduledTime } = req.body;

  try {
    await campaignsService.scheduleCampaign(campaignId, scheduledTime);
    return res.json({ message: 'Campaign scheduled successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};