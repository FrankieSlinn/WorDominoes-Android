// backend/routes/hofdataroute.js

const express = require('express');
const router = express.Router();
const HOFData = require('../models/hofdata');

// Use base path (the prefix will come from server.js)
router.get('/', async (req, res) => {
  try {
    const data = await HOFData.find().sort({ score: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve Hall of Fame data.' });
  }
});

module.exports = router;
