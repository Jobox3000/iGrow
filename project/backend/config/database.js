const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    authSource: 'admin'
  })
  .then(() => {
    // console.log('...');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
};

module.exports = connectDB;
