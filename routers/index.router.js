const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
  fastify.post("/add-category", indexController.addCategory);
  fastify.post("/add-product", indexController.addProduct);
  fastify.get(
    "/search-product",
    {
      schema: {
        querystring: {
          type: "object",
          required: ["category", "title"],

          properties: {
            category: {
              type: "string",
            },
            title: {
              type: "string",
            },
          },
        },
        response: {
          200: {
            description: "Successful response",
            type: "object",
            properties: {
              message: { type: "string" },
              data: { type: "array" },
            },
          },
          400: {
            description: "Bad request",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          500: {
            description: "Internal server error",
            type: "object",
            properties: {
              message: { type: "string" }
            }
          }
        },
      },
    },
    indexController.searchProduct
  );
  fastify.post("/change-category-name", indexController.changeCategoryName);
  next();
};
