const mongoose = require('mongoose')


// Define schema
const hofdataSchema = new mongoose.Schema({
  handle: { type: String, required: false },
  score: { type: String, required: true }
}, {
  timestamps: true,
  collection: 'WordDominoesHOF2025Collection'  
});

// Compile model
const HOFData = mongoose.model('HOFData', hofdataSchema);


// Export model
module.exports = HOFData;
