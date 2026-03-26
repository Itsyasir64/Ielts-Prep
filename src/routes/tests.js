// tests.js

const express = require('express');
const router = express.Router();

// Example test route
router.get('/test', (req, res) => {
    res.send('Test route is working!');
});

module.exports = router;