const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Conversations = require("./conversations.model");
const Users = require("./users.model");

const Participants = dbSequelize.define("participants", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
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
  conversationId: {
    type: DataTypes.UUID,
    field: "conversation_id",
    allowNull: false,
    references: {
      key: "id",
      model: Conversations,
    },
  },
});

module.exports = Participants;
