const { Target } = require('../models');

exports.createTarget = async (data) => {
  return Target.create(data);
};

exports.getAllTargets = async () => {
  return Target.findAll();
};

exports.getTargetById = async (targetId) => {
  return Target.findByPk(targetId);
};

exports.updateTarget = async (targetId, data) => {
  const target = await Target.findByPk(targetId);

  if (!target) {
    throw new Error('Target not found');
  }

  return target.update(data);
};

exports.deleteTarget = async (targetId) => {
  const target = await Target.findByPk(targetId);

  if (!target) {
    throw new Error('Target not found');
  }

  return target.destroy();
};