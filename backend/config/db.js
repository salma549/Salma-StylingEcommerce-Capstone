// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://SalmaSanubar:Salma_549@salmacluster.y5azttk.mongodb.net/newStylingAccessories786', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;