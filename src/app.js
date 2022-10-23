const express = require("express");
const cors = require("cors");

const userRoutes = require("./users/user.routes");
const authRoutes = require("./auth/auth.routes");
const conversationRoutes = require("./conversations/conversation.routes");

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/conversations", conversationRoutes);

module.exports = app;
