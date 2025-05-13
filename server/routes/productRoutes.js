const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const upload = require('../config/upload');
const router = express.Router();

// Route to add a product
router.post('/add', upload.single('image'), addProduct);

// Route to get all products
router.get('/', getProducts);

module.exports = router;
