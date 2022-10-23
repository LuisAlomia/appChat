const authServices = require("./auth.services");

const register = (req, resp) => {
  const { username, email, password, phone } = req.body;

  authServices
    .register({ username, email, password, phone })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const login = (req, resp) => {
  const { email, password } = req.body;

  authServices
    .login(email, password)
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { register, login };
