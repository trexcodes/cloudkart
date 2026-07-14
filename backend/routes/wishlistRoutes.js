const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get Wishlist
router.get("/", (req, res) => {

    db.query(
        "SELECT * FROM wishlist",
        (err, results) => {

            if(err) return res.status(500).json(err);

            res.json(results);

        }
    );

});

// Add to Wishlist
router.post("/", (req, res) => {

    const { user_id, product_id } = req.body;

    db.query(
        "INSERT INTO wishlist(user_id,product_id) VALUES(?,?)",
        [user_id, product_id],
        (err) => {

            if(err) return res.status(500).json(err);

            res.json({
                message:"Added to Wishlist"
            });

        }
    );

});

module.exports = router;