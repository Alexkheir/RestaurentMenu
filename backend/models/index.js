const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database'); 

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    logging: console.log, 
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Item = require('./Items')(sequelize, Sequelize.DataTypes);
db.Order = require('./Order')(sequelize, Sequelize.DataTypes);
db.OrderItem = require('./OrderItem')(sequelize, Sequelize.DataTypes);
db.Employee = require('./Employee')(sequelize, Sequelize.DataTypes);
db.Admin = require('./Admin')(sequelize, Sequelize.DataTypes);




module.exports = db;