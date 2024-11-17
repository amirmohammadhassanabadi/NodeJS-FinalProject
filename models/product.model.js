const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    subCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory'}
})

const Product = new mongoose.model('Product', productSchema);

module.exports = {
    Product
}