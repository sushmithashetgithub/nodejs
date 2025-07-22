const express = require('express');
const app = express();
const PORT = 4000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Home route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
