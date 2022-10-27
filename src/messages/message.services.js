const Message = require("../models/messages.model");
const uuid = require("uuid");

const getAll = async (conversationId) => {
  const data = await Message.findAll({ where: { conversationId } });
  return data;
};

const getOne = async (messageId, userId, conversationId) => {
  const data = await Message.findOne({
    where: { id: messageId, userId, conversationId },
  });
  return data;
};

const create = async (data) => {
  const newMessage = await Message.create({
    id: uuid.v4(),
    message: data.message,
    userId: data.userId,
    conversationId: data.conversationId,
  });
  return newMessage;
};

const deleteMessage = async (messageId, userId, conversationId) => {
  const data = await Message.destroy({
    where: { id: messageId, userId, conversationId },
  });
  return data;
};

module.exports = { getAll, getOne, create, deleteMessage };
