const indexController = require("../controllers/index.controller");

module.exports = function (fastify, otps, next) {
  fastify.post(
    "/add-category",
    {
      schema: {
        description: "Add a new category",
        body: {
          type: "object",
          required: ["title"],
          properties: {
            title: {type: "string"},
            description: {type: "string"},
            subCategory: {
              type: "object",
            }
          },
        },
        // parameters: {
        //   in: "body",
        //   name: "add-category",
        //   description: "Add a new category",
        //   schema: {
        //     type: "object",
        //     required: ["title"],
        //     properties: {
        //       title: {type: "string"},
        //       description: {type: "string"},
        //       subCategory: {type: "array"}
        //     }
        //   }
        // },
        response: {
          200: {
            description: "Successful response",
            type: "object",
            properties: {
              message: { type: "string" },
              data: { type: "object" },
            },
          },
          400: {
            description: "Bad request",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          409: {
            description: "category already defined",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          500: {
            description: "Internal server error",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    indexController.addCategory
  );
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
              message: { type: "string" },
            },
          },
        },
      },
    },
    indexController.searchProduct
  );
  fastify.put(
    "/change-category-name",
    {
      schema: {
        body: {
          type: "object",
          required: ["current", "newCategory"],
          properties: {
            current: { type: "string" },
            newCategory: { type: "string" },
          },
        },
        response: {
          200: {
            description: "Successful response",
            type: "object",
            properties: {
              message: { type: "string" },
              data: { type: "object" },
            },
          },
          400: {
            description: "Bad request",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          404: {
            description: "Category not found",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          500: {
            description: "Internal server error",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    indexController.changeCategoryName
  );
  next();
};
