const pool = require('../config/db'); 

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

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Ensure it's an integer
    console.log("Request to delete product with ID:", id);

    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    console.log("Delete result:", result);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


module.exports = { addProduct, getProducts, deleteProduct }; // Export controller functions
