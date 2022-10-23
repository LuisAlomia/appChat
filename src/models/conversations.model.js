const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Users = require("./users.model");

const Conversations = dbSequelize.define("conversations", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: "https://placeimg.com/640/480/tech",
  },
  userId: {
    type: DataTypes.UUID,
    field: "user_id",
    allowNull: false,
    references: {
      key: "id",
      model: Users,
    },
  },
});

module.exports = Conversations;
