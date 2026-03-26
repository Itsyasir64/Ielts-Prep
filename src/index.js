// This is the entry point for the application

const express = require('express');
const app = express();

// Setup middleware, routes, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});