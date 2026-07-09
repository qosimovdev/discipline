const { User } = require("../model")
const generateToken = require("../utils/generateToken")
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const avatar = req.file ? `/uploads/${req.file.filename}` : "";
        const existingUser = await User.findOne({
            where: { email }
        })
        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            avatar,
        })
        const token = generateToken(user.id)
        const { password: _, ...userData } = user.toJSON();
        return res.status(201).json({
            message: "User registered successfully",
            user: userData,
            token,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        const comparePassword = await bcrypt.compare(
            password,
            user.password
        );
        if (!comparePassword) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        const token = generateToken(user.id)
        const { password: _, ...userData } = user.toJSON();
        await user.update({
            lastSeen: new Date(),
        });
        return res.status(200).json({
            message: "Login successful",
            token,
            user: userData
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

exports.me = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: {
                exclude: ["password"],
            },
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json({
            user
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}