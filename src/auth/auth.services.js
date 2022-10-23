const Users = require("../models/users.model");
const uuid = require("uuid");
const { hashedPassword, comparedPassword } = require("../utils/hashedPassword");
const createToken = require("../utils/createToken");

/**
 * funcion para registrar usuarios
 * @param {*} data
 * @returns
 */
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

/**
 * funcion que valida el usuario y regresa un token
 * @param {*} email
 * @param {*} plainPassword
 * @returns
 */
const login = async (email, plainPassword) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return { message: "Invalid Credentials" };

  const userValid = comparedPassword(plainPassword, user.password);

  return userValid
    ? createToken(user.id, user.username, user.role)
    : { message: "Invalid Credentials" };
};

module.exports = { register, login };
