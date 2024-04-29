const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  //Definimos el esquema de nuestra coleccion - cada uno de nuestros documentos van a tener estos campos
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestaps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
