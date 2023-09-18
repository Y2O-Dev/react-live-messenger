const { Pool } = require("pg");
require("dotenv").config();

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    })
  : new Pool({
      database: process.env.POSTGRES_DB,
      host: process.env.DATABASE_HOST,
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      port: process.env.DATABASE_PORT,
    });

module.exports = pool;
