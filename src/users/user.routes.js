const router = require("express").Router();
const userControllers = require("./user.controllers");
const passport = require("passport");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);

const authUser = passport.authenticate("jwt", { session: false });

router.get("/", userControllers.getAll);

router.get("/me", authUser, userControllers.getOneMyUser);

router
  .route("/:id")
  .get(userControllers.getOne)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
