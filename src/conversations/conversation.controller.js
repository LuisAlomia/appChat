const conversationServices = require("./conversation.services");

const getAll = (req, resp) => {
  const userId = req.user.id;
  console.log(userId);
  conversationServices
    .getAll(userId)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;

  conversationServices
    .getOne(userId, conversationId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const userId = req.user.id;
  const { title } = req.body;

  conversationServices
    .create({ userId, title })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const userId = req.user.id;
  const { title } = req.body;
  const conversationId = req.params.conversation_id;

  conversationServices
    .update({ title }, userId, conversationId)
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: "Update Data" })
        : resp.status(404).json({ message: "Invalid ID" });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteConversaion = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;

  conversationServices
    .deleteConversaion(userId, conversationId)
    .then((data) => {
      data
        ? resp.status(204)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, create, update, deleteConversaion };
