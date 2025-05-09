// server/controllers/productController.js
const pool = require('../config/db'); // Import PostgreSQL connection pool

// Add a new product to the database
const addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      'INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, description, image_url]
    );
    res.status(201).json(result.rows[0]); // Return the added product
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all products from the database
const getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows); // Return all products
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { addProduct, getProducts }; // Export controller functions
