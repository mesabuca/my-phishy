const redisUtils = require('../utils/redisUtils')
const { sequelize } = require('../models/index')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const Sequelize = require('sequelize');


exports.status = (req, res) => {
    res.sendStatus(200);
  };
  
exports.ready = (req, res) => {
  // const errRedis = redisUtils.checkConnection
  // const seq = new Sequelize(config.database, config.username, config.password, config);
  // let errDb = ''
  // seq
  //     .authenticate()
  //     .then(() => {
  //     })
  //     .catch((err) => {
  //       console.error('Unable to connect to the PostgreSQL database:', err);
  //       errDb = err
  //     });

  // if (errRedis) {
  //   console.log('aksdjalksdasd');
  //   res.sendStatus(errRedis);
  // } else if (errDb) {
  //   res.sendStatus(500);
  // } else {
    res.sendStatus(200);
  // }
};