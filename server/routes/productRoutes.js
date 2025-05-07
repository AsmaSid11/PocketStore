// server/routes/productRoutes.js
const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

// Route to add a product
router.post('/add', addProduct);

// Route to get all products
router.get('/', getProducts);

module.exports = router;
