const userModel = require("../models/userModel")

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body

        if (!email) {
            throw new Error("Please Provide Email!")
        }

        if (!password) {
            throw new Error("Please Provide Password!")
        }

        if (!name) {
            throw new Error("Please Provide Name!")
        }

        const userData = new userModel

    } catch (error) {
        res.json({
            message: error,
            error: true,
            success: false,
        })
    }
}