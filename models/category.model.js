const mongoose = require("mongoose");

const categorySchema = {
    title: {type: String, required: true},
    description: {type: String},
    subCategory: [String]
}

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
    Category
}