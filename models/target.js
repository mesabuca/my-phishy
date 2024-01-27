'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Target.belongsToMany(models.Campaign, {
        through: 'CampaignTargets',
        foreignKey: 'campaignId',
        otherKey: 'targetId',
        as: 'targets',
      });
    }
  }
  Target.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Target',
  });
  return Target;
};