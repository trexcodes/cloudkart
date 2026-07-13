const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
    const { name, email, address } = req.body;

    const sql = `
        INSERT INTO orders (customer_name, email, address)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, address], (err) => {
        if (err) return res.status(500).json(err);

        res.json({ message: "Order placed successfully!" });
    });
});

module.exports = router;