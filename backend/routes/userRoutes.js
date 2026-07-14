const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {

    const { fullname, email, phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
        INSERT INTO users(fullname,email,phone,password)
        VALUES(?,?,?,?)
    `;

    db.query(
        sql,
        [fullname, email, phone, hashedPassword],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Registration Successful"
            });

        }
    );

});   // <-- Register route ends here

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) return res.status(500).json(err);

        if (results.length === 0) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.json({
                success: false,
                message: "Wrong Password"
            });
        }

        res.json({
            success: true,
            message: "Login Successful",
            user
        });

    });

});

module.exports = router;