const {Category} = require("../models/category.model");

exports.addCategory = (req, rep) => {
    try {
        const {title, description} = req.body;

        if (!title) {
            return rep.status(400).send({message: "Title is required"});
        }

        return rep.status(200).send({message: "category added successfully"})
    } catch (error) {
        return rep.status(500).send({ message: `internal error - ${error.message}` });
    }
}