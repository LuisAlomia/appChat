const participantsServices = require("./participants.services");

const getAll = (req, resp) => {
  participantsServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const participantId = req.params.participant_id;
  const conversationId = req.params.conversation_id;

  participantsServices
    .getOne(participantId, conversationId)
    .then((data) => {
      data ? resp.status(200).json(data) : resp.status(404).json(data);
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteParticipant = (req, resp) => {
  const participantId = req.params.participant_id;
  const conversationId = req.params.conversation_id;

  participantsServices
    .deleteParticipant(participantId, conversationId)
    .then((data) => {
      data ? resp.status(204).json(data) : resp.status(404).json(data);
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const userId = req.user.id;
  const conversationId = req.params.conversation_id;

  participantsServices
    .create(userId, conversationId)
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteParticipant, create };
