const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");

exports.addCategory = async (req, rep) => {
  console.log("recieved");
  
  try {
    if (!req.body) {
      return rep.status(400).send({ message: "request body can not be empty" });
    }
    const { title, description, subCategory } = req.body;

    if (!title) {
      return rep.status(400).send({ message: "Title is required" });
    }

    // if (subCategory && !Array.isArray(subCategory)) {
    //   return rep.status(400).send({ message: "subCategory should be an array" });
    // }

    const targeted = await Category.findOne({ title: title });
    if (targeted) {
      return rep.status(409).send({ message: "category already defined" });
    }

    let newCategory = new Category({
      title: title,
      description: description,
      subCategory: subCategory,
    });

    newCategory = await newCategory.save();
    
    return rep
      .status(200)
      .send({ message: "category added successfully", data: newCategory });
  } catch (error) {
    return rep
      .status(500)
      .send({ message: `internal error - ${error.message}` });
  }
};

exports.addProduct = async (req, rep) => {
  try {
    if (!req.body) {
      return rep.status(400).send({ message: "request body can not be empty" });
    }

    const { title, description, price, category } = req.body;

    if (!title || !price || !category) {
      return rep
        .status(400)
        .send({ message: "please prepare the needed info properly" });
    }

    const targetedCategory = await Category.findOne({ title: category });

    if (!targetedCategory) {
      return rep.status(404).send({ message: "category not found" });
    }

    let newProduct = new Product({
      title: title,
      description: description,
      price: price,
      category: targetedCategory._id,
    });

    newProduct = await newProduct.save();

    return rep
      .status(200)
      .send({ message: "Product successfully added", data: newProduct });
  } catch (error) {
    return rep
      .status(500)
      .send({ message: `internal error - ${error.message}` });
  }
};

exports.searchProduct = async (req, rep) => {
  try {
    if (!req.query) {
      return rep
        .status(400)
        .send({ message: "request query can not be empty" });
    }

    const { category, title } = req.query;
    if (!category || !title) {
      return rep
        .status(400)
        .send({ message: "please prepare the needed info properly" });
    }

    let products = await Product.find().populate("category");
    products = products.filter((item) => {
      return (
        item.category.title == category &&
        item.title == title
      );
    });

    return rep
      .status(200)
      .send({ message: `process finnished successfully`, data: products });
  } catch (error) {
    return rep
      .status(500)
      .send({ message: `internal error - ${error.message}` });
  }
};

exports.changeCategoryName = async (req, rep) => {
  try {
    if (!req.body) {
      return rep.status(400).send({ message: "request body can not be empty" });
    }

    const { current, newCategory } = req.body;

    if (!current || !newCategory) {
      return rep
        .status(400)
        .send({ message: "please prepare the needed info properly" });
    }

    let category = await Category.findOne({ title: current });
    if (!category) {
      return rep.status(404).send({ message: "category not found" });
    }

    category.title = newCategory;
    category = await category.save();
    return rep
      .status(200)
      .send({ message: `category name changed successfully`, data: category });
  } catch (error) {
    return rep
    .status(500)
    .send({ message: `internal error - ${error.message}` });
  }
};
