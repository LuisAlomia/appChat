const authRole = (req, resp, next) => {
  const { role } = req.user;

  role === "admin" ? next() : resp.status(401).json({ messge: "Unauthorized" });
};

module.exports = authRole;
