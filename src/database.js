const config = require("./config/env.config");
const { Sequelize } = require("sequelize");

const dbSequelize = new Sequelize({
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  database: config.db.database,
  dialect: "postgres",
});

const dataBaseInit = async () => {
  try {
    await dbSequelize.authenticate();
    await dbSequelize.sync();
    console.log("Data base Init");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { dbSequelize, dataBaseInit };
