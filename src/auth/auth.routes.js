const router = require("express").Router();
const authControllers = require("./auth.controllers");

router
  .post("/register", authControllers.register)
  .post("/login", authControllers.login);

module.exports = router;
