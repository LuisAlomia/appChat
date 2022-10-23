const bcrypt = require("bcrypt");

hashedPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

comparedPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { hashedPassword, comparedPassword };
