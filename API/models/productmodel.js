const { Schema, model } = require("mongoose");


const productShema = new Schema({
  name: {
    type: String

  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number
  }
})

const product_MODEL = model("product", productShema)
module.exports = product_MODEL;