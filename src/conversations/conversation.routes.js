const router = require("express").Router();
const conversationControllers = require("./conversation.controller");
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

module.exports = router;
