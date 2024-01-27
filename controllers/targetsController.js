
const targetsService = require('../services/targetsService');

exports.getAllTargets = async (req, res) => {
  try {
    const targets = await targetsService.getAllTargets();
    res.json(targets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTargetById = async (req, res) => {
  const targetId = req.params.id;

  try {
    const target = await targetsService.getTargetById(targetId);
    res.json(target);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTarget = async (req, res) => {
  const data = req.body;

  try {
    const newTarget = await targetsService.createTarget(data);
    res.json(newTarget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTarget = async (req, res) => {
  const targetId = req.params.id;
  const data = req.body;

  try {
    const updatedTarget = await targetsService.updateTarget(targetId, data);
    res.json(updatedTarget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTarget = async (req, res) => {
  const targetId = req.params.id;

  try {
    await targetsService.deleteTarget(targetId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};