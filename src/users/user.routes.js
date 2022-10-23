const router = require("express").Router();
const userControllers = require("./user.controllers");

router.get("/", userControllers.getAll);

router
  .route("/:id")
  .get(userControllers.getOne)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
