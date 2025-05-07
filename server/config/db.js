// server/config/db.js
const { Pool } = require('pg'); // Import Pool from pg
require('dotenv').config(); // For environment variables

// Set up the PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Connect using DATABASE_URL from .env
});

module.exports = pool; // Export the pool to use in controllers
