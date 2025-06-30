const mongoose = require('mongoose')


// Define schema
const hofdataSchema = new mongoose.Schema({
  handle: { type: String, required: false },
  score: { type: String, required: true }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Compile model
const HOFData = mongoose.model('HOFData', hofdataSchema);

// Export model
module.exports = HOFData;
