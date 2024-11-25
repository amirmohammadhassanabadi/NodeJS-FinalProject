const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
})

const Product = new mongoose.model('Product', productSchema);

module.exports = {
    Product
}