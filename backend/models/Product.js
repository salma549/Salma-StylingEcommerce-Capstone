const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "men", "women"
  image: { type: String, required: true },
  price: { type: Number, required: true },
  accessories: [accessorySchema],
});

module.exports = mongoose.model('Product', productSchema);