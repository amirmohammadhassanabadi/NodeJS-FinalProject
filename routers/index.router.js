const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
    fastify.post("/", indexController.addCategory);
    next();
  };