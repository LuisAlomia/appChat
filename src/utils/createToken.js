const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../config/env.config");

const createToken = (id, username, role) => {
  return jwt.sign({ id, username, role }, secretOrKey);
};

module.exports = createToken;
