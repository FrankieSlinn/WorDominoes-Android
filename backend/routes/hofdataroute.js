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

// POST route to add new entry
// POST new HOF entry
router.post('/', async (req, res) => {
    try {
      const { handle, score } = req.body;
  
      // You might want to validate here
      if (!score) {
        return res.status(400).json({ error: 'Score is required' });
      }
  
      const newEntry = new HOFData({ handle, score });
      await newEntry.save();
  
      res.status(201).json(newEntry);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create Hall of Fame entry.' });
    }
  });

  // PUT /api/hofdataroute/:id
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { handle, score } = req.body;
  
      // Find the entry by ID and update with new data
      const updatedEntry = await HOFData.findByIdAndUpdate(
        id,
        { handle, score },
        { new: true, runValidators: true } // return the updated doc, run schema validators
      );
  
      if (!updatedEntry) {
        return res.status(404).json({ error: 'Entry not found' });
      }
  
      res.json(updatedEntry);
    } catch (err) {
      console.error('Update error:', err);
      res.status(500).json({ error: 'Failed to update entry' });
    }
  });
  
  // DELETE /api/hofdataroute/:id
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedEntry = await HOFData.findByIdAndDelete(id);
  
      if (!deletedEntry) {
        return res.status(404).json({ error: 'Entry not found' });
      }
  
      res.json({ message: 'Entry deleted successfully', deletedEntry });
    } catch (err) {
      console.error('Delete error:', err);
      res.status(500).json({ error: 'Failed to delete entry' });
    }
  });
  

module.exports = router;
