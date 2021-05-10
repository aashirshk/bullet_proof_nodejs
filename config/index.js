let dotenv = require('dotenv');
dotenv.config();

let config = {
    databaseURL: process.env.DBCONFIG,
    port: process.env.PORT,
}

module.exports = config;