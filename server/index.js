// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const productRoutes = require('./routes/productRoutes'); // Import product routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Routes
app.use('/api/products', productRoutes); // Routes for products

//print test message
app.get('/', (req, res) => {
  res.send('Hi hello ...'); // Test message to check if server is running
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
