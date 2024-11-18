const {Category} = require("../models/category.model");

exports.addCategory = async (req, rep) => {
    try {
        if (!req.body) {
            return rep.status(400).send({message: "request body can not be empty"});
        }
        const {title, description} = req.body;

        if (!title) {
            return rep.status(400).send({message: "Title is required"});
        }

        const targeted = await Category.findOne({title: title});
        if (targeted) {
            return rep.status(409).send({message: "category already defined"});
        }

        let newCategory = new Category({
            title: title,
            description: description
        })

        newCategory = await newCategory.save();

        return rep.status(200).send({message: "category added successfully", data: newCategory});
    } catch (error) {
        return rep.status(500).send({ message: `internal error - ${error.message}` });
    }
}

exports.addSubCategory = async (req, rep) => {}