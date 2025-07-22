const express = require('express');
const app = express();
const PORT = 4000;

// Import books router
const bookRouter = require('./routes/book');

// Use router for /books
app.use('/book', bookRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
