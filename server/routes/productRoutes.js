const express = require('express');
const { addProduct, getProducts, deleteProduct } = require('../controllers/productController');
const upload = require('../config/upload');
const router = express.Router();

// Route to add a product
router.post('/add', upload.single('image'), addProduct);

// Route to get all products
router.get('/', getProducts);

// Route to delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
