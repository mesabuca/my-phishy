const express = require('express');
const router = express.Router();
const targetsController = require('../controllers/targetsController');

router.get('/', targetsController.getAllTargets);
router.get('/:id', targetsController.getTargetById);
router.post('/', targetsController.createTarget);
router.put('/:id', targetsController.updateTarget);
router.delete('/:id', targetsController.deleteTarget);

module.exports = router;