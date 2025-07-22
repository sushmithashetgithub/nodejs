const express = require('express');
const app = express();
const PORT = 4000;

// Import routers
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});

// Use routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Custom 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
