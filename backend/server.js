// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const currentDB = require('./config/db'); // make sure this points to the file where your Mongo URI is set

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(currentDB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import the router
const indexRouter = require('./routes/index');

// Mount the router
app.use('/api/index', indexRouter);

const hofRoutes = require('./routes/hofdataroute');
app.use('/api/hofdataroute', hofRoutes);







app.listen(3000, () => {
  console.log('Server running on port 3000');
});
