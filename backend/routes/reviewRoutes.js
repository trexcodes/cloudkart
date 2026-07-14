const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get Reviews
router.get("/:productId", (req, res) => {

    db.query(
        "SELECT * FROM reviews WHERE product_id=? ORDER BY created_at DESC",
        [req.params.productId],
        (err, results) => {

            if(err) return res.status(500).json(err);

            res.json(results);

        }
    );

});

// Add Review
router.post("/", (req, res) => {

    const { product_id, username, rating, review } = req.body;

    db.query(
        "INSERT INTO reviews(product_id,username,rating,review) VALUES(?,?,?,?)",
        [product_id, username, rating, review],
        (err) => {

            if(err) return res.status(500).json(err);

            res.json({
                message:"Review Added Successfully"
            });

        }
    );

});

module.exports = router;