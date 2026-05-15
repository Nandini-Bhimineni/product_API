const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
  },

  category: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  stock: {
    type: Number,
    default: 0,
  },

  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);