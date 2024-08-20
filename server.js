require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./utils/db');
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors()); // Use cors as middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, './public/img')));

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

