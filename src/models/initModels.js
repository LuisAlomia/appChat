const Users = require("./users.model");
const Conversations = require("./conversations.model");
const Messages = require("./messages.model");
const Participants = require("./participants.model");

const initModels = () => {
  Conversations.belongsTo(Users);
  Users.hasMany(Conversations);

  Messages.belongsTo(Conversations);
  Conversations.hasMany(Messages);

  Messages.belongsTo(Users);
  Users.hasMany(Messages);

  Participants.belongsTo(Conversations);
  Conversations.hasMany(Participants);

  Participants.belongsTo(Users);
  Users.hasMany(Participants);
};

module.exports = initModels;
