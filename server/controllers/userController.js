const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { createToken } = require("../Middleware/auth.js");

exports.createUser = async (req, res) => {
    const { name, mail, password } = req.body;
    if (!name || !mail || !password) {
        return res.status(400).json({
            message: "Please fill all the required fields"
        });
    }
    try {
        const userExist = await User.findOne({ mail: mail })
        if (userExist) {
            return res.status(400).json({
                message: "This email already exist!"
            })
        } else {
            const user = new User({ name, mail, password })
            const userRegistered = await user.save();
            if (userRegistered) {
                return res.status(201).json({ 
                    message: "User Registered Successfully" 
                });
            } else {
                return res.status(400).json({ 
                    message: "Failed to Register" 
                });
            }
        }
    } catch (err) {
        console.log(err)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body;

        if (!mail || !password) {
            return res.status(400).json({
                message: "Please fill all the required fields"
            });
        }

        const userLogin = await User.findOne({ mail: mail });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                return res.status(400).json({ 
                    message: "Invalid Credentials" 
                })
            } else {
                // generating tokens 
                const token = createToken(userLogin._id);
                res.cookie('jwt', token, { httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000});
                return res.status(400).json({ 
                    message: "Logged In Successfully" 
                })
            }
        } else {
            return res.status(400).json({ 
                message: "Invalid Credentials" 
            })
        }
    } catch (err) {
        console.log(err)
    }
};
