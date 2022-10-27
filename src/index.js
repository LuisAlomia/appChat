const app = require("./app");
const { port } = require("./config/env.config");
const { dataBaseInit } = require("./database");
const initModels = require("./models/initModels");

const server = () => {
  app.listen(port, () => console.log(`Run server in PORT: ${port} `));

  dataBaseInit();
  initModels();
};

server();
