const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {

    try {

        const { fullname, email, phone, password } = req.body;

        // Validate input
        if (!fullname || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (fullname, email, phone, password)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql, [fullname, email, phone, hashedPassword], (err, result) => {

            if (err) {

                console.error(err);

                // Duplicate email
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({
                        success: false,
                        message: "Email already registered."
                    });
                }

                return res.status(500).json({
                    success: false,
                    message: "Registration failed."
                });
            }

            return res.status(201).json({
                success: true,
                message: "Registration Successful",
                userId: result.insertId
            });

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

});
// ================= LOGIN =================

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter email and password."
        });
    }

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Server Error"
            });
        }

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

        delete user.password;

        return res.json({
            success: true,
            message: "Login Successful",
            user
        });

    });

});
module.exports = router;