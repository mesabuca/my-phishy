const express = require('express');
const router = express.Router();
const healthCheckController = require('../controllers/healthCheckController');

router.get('/status', healthCheckController.status);
router.get('/ready', healthCheckController.ready);

module.exports = router;