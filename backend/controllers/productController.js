const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
    Product.getAllProducts((err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err
            });
        }

        res.status(200).json(results);
    });
};
