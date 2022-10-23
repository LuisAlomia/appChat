const Users = require("../models/users.model");
const uuid = require("uuid");
const { hashedPassword, comparedPassword } = require("../utils/hashedPassword");

const register = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    username: data.username,
    email: data.email,
    password: hashedPassword(data.password),
    phone: data.phone,
  });
  return newUser;
};

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });
  const userValid = comparedPassword(password, user.password);

  return userValid ? user : { message: "Invalid Credentials" };
};

module.exports = { register, login };
