const mongoose = require("mongoose");

const categorySchema = {
    title: {type: String, required: true},
    description: {type: String, required: true},
    subCategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory'}]
}

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
    Category
}