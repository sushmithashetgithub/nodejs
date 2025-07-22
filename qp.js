const express = require('express');
const app = express();
const PORT = 4000;

// Dynamic GET route with route parameter and query parameter
app.get('/welcome/:username', (req, res) => {
    const username = req.params.username; // extract route parameter
    const role = req.query.role; // extract query parameter

    // Check if role is provided
    if (role) {
        res.send(`Welcome ${username}, your role is ${role}`);
    } else {
        res.send(`Welcome ${username}, role not specified`);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
