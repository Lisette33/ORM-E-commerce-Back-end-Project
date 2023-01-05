const Sequelize = require('sequelize');
require('dotenv').config();

console.log(process.env.DB_NAME);

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
