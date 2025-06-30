// routes/index.js

const express = require('express');
const router = express.Router();

// Basic GET route
router.get('/', (req, res) => {
  res.send('Hello from backend');
});

// Export the router (not app!)
module.exports = router;


