const app = require("./app");
const { port } = require("./config/env.config");
const { dataBaseInit } = require("./database");

const server = () => {
  app.listen(port, () => console.log(`Run server in PORT: ${port} `));

  dataBaseInit();
};

server();
