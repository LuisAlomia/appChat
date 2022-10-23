const uuid = require("uuid");
const Conversation = require("../models/conversations.model");

const getAll = async (userId) => {
  const data = await Conversation.findAll({ where: { userId } });
  return data;
};

const getOne = async (userId, conversationId) => {
  const data = await Conversation.findOne({
    where: { userId, id: conversationId },
  });
  return data;
};

const create = async (data) => {
  const newConversation = await Conversation.create({
    id: uuid.v4(),
    title: data.title,
    userId: data.userId,
  });
  return newConversation;
};

const update = async (data, userId, conversationId) => {
  const updateConversation = await Conversation.update(data, {
    where: { userId, id: conversationId },
  });
  return updateConversation;
};

const deleteConversaion = async (userId, conversationId) => {
  const data = await Conversation.destroy({
    where: { userId, id: conversationId },
  });
  return data;
};

module.exports = { getAll, getOne, create, update, deleteConversaion };
