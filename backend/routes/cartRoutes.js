const express = require("express");
const router = express.Router();

const db = require("../config/db");

let cart = [];

// Get cart with product details
router.get("/", (req, res) => {
    if (cart.length === 0) {
        return res.json([]);
    }

    const ids = cart.map(item => item.productId);

    const sql = `SELECT * FROM products WHERE id IN (${ids.join(",")})`;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Add to cart
router.post("/", (req, res) => {
    cart.push(req.body);
    res.json({ message: "Product added to cart!" });
});

module.exports = router;