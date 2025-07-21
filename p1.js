const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware function to add req.user = "Guest"
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};

// Route /welcome where middleware is applied
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
