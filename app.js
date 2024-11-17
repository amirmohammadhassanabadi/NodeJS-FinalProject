const app = require("fastify")({logger: false});
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routers/index.router");

// Router
app.register(indexRouter, {prefix: "/"})

// Database Variables
const port = process.env.PORT || 3001;
const db_url = process.env.DB_URL || "mongodb://localhost:27017/NodeJS-TIT";

mongoose
  .connect(db_url)
  .then(() => {
    app.listen({ port: port }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(
        `server is runnig on port ${address} - connected to mongoDB`
      );
    });
  })
  .catch((err) => {
    console.log(`mongoDB connection failed - ${err.message}`);
  });