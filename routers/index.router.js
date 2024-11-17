const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
    fastify.get("/", indexController.testController);
    fastify.get("/test", indexController.test2Controller);
    next();
  };