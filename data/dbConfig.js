require("dotenv").config();

const knex = require("knex");
const db_env = process.env.DB_ENVIRONMENT || "development"
const db_config = require("../knexfile")[db_env]
const db = knex(db_config);

module.exports = db