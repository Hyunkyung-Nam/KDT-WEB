'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; //앞에 node_ENV없으면 뒤에 development실행
const config = require(__dirname + '/../config/config.js')[env]; //development까지 들어간거
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//model 넣기
db.User = require('./User')(sequelize);
//const model = require('./User');
//const temp = model(sequelize);
//db.Member = temp

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
