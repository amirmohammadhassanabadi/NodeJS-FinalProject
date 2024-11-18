const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");

exports.addCategory = async (req, rep) => {
  try {
    if (!req.body) {
      return rep.status(400).send({ message: "request body can not be empty" });
    }
    const { title, description, subCategory } = req.body;

    if (!title) {
      return rep.status(400).send({ message: "Title is required" });
    }

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

exports.addSubCategory = async (req, rep) => {
  try {
    if (!req.body) {
      return rep.status(400).send({ message: "request body can not be empty" });
    }

    const { title, category } = req.body;

    if (!title) {
      return rep.status(400).send({ message: "title is required" });
    }

    if (!category) {
      return rep.status(400).send({ message: "category is required" });
    }

    const targeted = await Category.findOne({ title: category });

    if (!targeted) {
      return rep.status(404).send({ message: "category not found" });
    }

    if (targeted.subCategory.find((item) => item === title)) {
      return rep.status(404).send({ message: "subcategory already defined" });
    }

    targeted.subCategory.push(title);
    await targeted.save();

    return rep
      .status(200)
      .send({
        message: "subcategory added successfully",
        data: newSubCategory,
      });
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
        return rep
        .status(404)
        .send({ message: "category not found" });
    }

    let newProduct = new Product({
        title,
        description,
        price,
        category: targetedCategory._id
    })

    newProduct = await newProduct.save();

    return rep
      .status(200)
      .send({ message:"Product successfully added", data: newProduct });

  } catch (error) {
    return rep
      .status(500)
      .send({ message: `internal error - ${error.message}` });
  }
};
