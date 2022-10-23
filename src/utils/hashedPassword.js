const bcrypt = require("bcrypt");

hashedPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

comparedPassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};

module.exports = { hashedPassword, comparedPassword };
