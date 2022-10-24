const router = require("express").Router();
const conversationControllers = require("./conversation.controller");
const messageControllers = require("../messages/message.controllers");
const passport = require("passport");
require("../middleware/authUser.middleware")(passport);

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(authUser, conversationControllers.getAll)
  .post(authUser, conversationControllers.create);

router
  .route("/:conversation_id")
  .get(authUser, conversationControllers.getOne)
  .patch(authUser, conversationControllers.update)
  .delete(authUser, conversationControllers.deleteConversaion);

router
  .route("/:conversation_id/messages")
  .get(authUser, messageControllers.getAll)
  .post(authUser, messageControllers.create);

router
  .route("/:conversation_id/messages/:message_id")
  .get(authUser, messageControllers.getOne)
  .delete(authUser, messageControllers.deleteMessage);

module.exports = router;
