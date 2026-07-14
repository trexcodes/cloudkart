const db = require("../config/db");
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);

router.post("/", (req, res) => {

    const { name, description, price, category, image, stock } = req.body;

    const sql = `
    INSERT INTO products
    (name,description,price,category,image,stock)
    VALUES(?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [name, description, price, category, image, stock],
        (err) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: "Product Added Successfully"
            });

        });

});
router.get("/:id", (req, res) => {

    db.query(
        "SELECT * FROM products WHERE id = ?",
        [req.params.id],
        (err, results) => {

            if (err) return res.status(500).json(err);

            if (results.length === 0) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.json(results[0]);

        }
    );

});
router.delete("/:id", (req, res) => {

    db.query(
        "DELETE FROM products WHERE id = ?",
        [req.params.id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product Deleted Successfully"
            });

        }
    );

});
module.exports = router;