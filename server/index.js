const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes); // Routes for displaying all products - MyProducts


app.get('/', (req, res) => {
  res.send('This is the server side of PocketStore ;)'); // Test message to check if server is running
});

app.post('/api/products', async (req, res) => {
  const { name, price, description, imageUrl } = req.body

  // Insert into DB
  const result = await pool.query(
    'INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, price, description, imageUrl]
  )

  res.status(201).json(result.rows[0])
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
