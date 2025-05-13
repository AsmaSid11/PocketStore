const { Pool } = require('pg');
require('dotenv').config();

// Set up the PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;
