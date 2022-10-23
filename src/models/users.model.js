const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");

const Users = dbSequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImage: {
    type: DataTypes.STRING,
    field: "profile_image",
    defaultValue: "https://placeimg.com/640/480/people",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "is_active",
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    field: "is_verified",
    defaultValue: "false",
  },
});

module.exports = Users;
