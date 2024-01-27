
const express = require('express');
const router = express.Router();
const campaignsController = require('../controllers/campaignsController');

router.get('/', campaignsController.getAllCampaigns);
router.get('/:id', campaignsController.getCampaignById);
router.post('/', campaignsController.createCampaign);
router.put('/:id', campaignsController.updateCampaign);
router.delete('/:id', campaignsController.deleteCampaign);
router.post('/:campaignId/add_target', campaignsController.addTargetToCampaign);
router.post('/:campaignId/launch', campaignsController.launchCampaign);
router.post('/:campaignId/schedule', campaignsController.scheduleCampaign);

module.exports = router;