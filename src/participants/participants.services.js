const Participants = require("../models/participants.model");
const uuid = require("uuid");
const Users = require("../models/users.model");
const Conversations = require("../models/conversations.model");

const getAll = async () => {
  const data = await Participants.findAll({
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["password"],
        },
      },
      { model: Conversations },
    ],
  });
  return data;
};

const getOne = async (participantId, conversationId) => {
  const data = await Participants.findOne({
    where: { id: participantId, conversationId },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["password"],
        },
      },
      { model: Conversations },
    ],
  });
  return data;
};

const deleteParticipant = async (participantId, conversationId) => {
  const data = await Participants.destroy({
    where: { id: participantId, conversationId },
  });
  return data;
};

const create = async (userId, conversationId) => {
  const newParticipants = await Participants.create({
    id: uuid.v4(),
    userId,
    conversationId,
  });
  return newParticipants;
};

module.exports = { getAll, create, deleteParticipant, getOne };
