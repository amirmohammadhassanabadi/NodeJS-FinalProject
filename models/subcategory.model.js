const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
})

const Subcategory = new mongoose.model('Subcategory', subcategorySchema);

module.exports = {
    Subcategory
}