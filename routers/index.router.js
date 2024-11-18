const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
    fastify.post("/add-category", indexController.addCategory);
    fastify.post("/add-product", indexController.addProduct);
    fastify.get("/search-product", indexController.searchProduct)
    next();
  };