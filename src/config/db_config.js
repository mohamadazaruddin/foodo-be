require("dotenv").config();

const { Sequelize } = require("sequelize");
const {
  DATABASE_TYPE,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

console.log(MYSQL_PASSWORD, "pass");
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: DATABASE_TYPE,
  port: process.env.MYSQL_PORT,
});

module.exports = sequelize;
