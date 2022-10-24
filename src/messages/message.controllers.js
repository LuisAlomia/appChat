const messageServices = require("./message.services");

const getAll = (req, resp) => {
  const conversationId = req.params.conversation_id;

  messageServices
    .getAll(conversationId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;
  const messageId = req.params.message_id;

  messageServices
    .getOne(messageId, userId, conversationId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;
  const { message } = req.body;

  messageServices
    .create({ message, userId, conversationId })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteMessage = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;
  const messageId = req.params.message_id;

  messageServices
    .deleteMessage(messageId, userId, conversationId)
    .then((data) => {
      data
        ? resp.status(204)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, create, deleteMessage };
