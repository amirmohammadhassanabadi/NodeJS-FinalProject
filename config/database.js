require("dotenv").config({path: "../.env"});

const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL || "mongodb://localhost:27017/NodeJS-TIT";

module.exports = {
    port,
    db_url
}