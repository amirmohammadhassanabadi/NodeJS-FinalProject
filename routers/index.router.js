const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
    fastify.post("/add-category", indexController.addCategory);
    fastify.post("/add-product", indexController.addProduct);
    fastify.get("/search-product", {schema: {
      description: "get some data",
      tags: ["search"],
      params: {
        type: "object",
        properties: {
          query: {
            type: "string",
            },
            }
      }
    }}, indexController.searchProduct);
    fastify.post("/change-category-name", indexController.changeCategoryName);
    next();
  };