const Users = require("../models/users.model");

const getAll = async () => {
  const data = await Users.findAll({
    attributes: {
      exclude: ["password"],
    },
  });
  return data;
};

const getOne = async (id) => {
  const data = await Users.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
  });
  return data;
};

const update = async (id, data) => {
  const updateUser = await Users.update(data, { where: { id } });
  return updateUser;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getOne, update, deleteUser };
