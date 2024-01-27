'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Campaign.belongsToMany(models.Target, {
        through: 'CampaignTargets',
        foreignKey: 'targetId',
        otherKey: 'campaignId',
        as: 'targets',
      });
    }
  }
  Campaign.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};