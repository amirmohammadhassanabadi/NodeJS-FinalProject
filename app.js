const app = require("fastify")({logger: true});
const mongoose = require("mongoose");
require("dotenv").config();

const {port, db_url} = require("./config/database");

mongoose
  .connect(db_url)
  .then(() => {
    app.listen({ port: port }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      app.log.info(
        `server is runnig on port ${address} - connected to mongoDB`
      );
    });
  })
  .catch((err) => {
    app.log.error(`mongoDB connection failed - ${err.message}`);
  });