const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("spa", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
