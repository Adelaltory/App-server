const User_MODEL = require("../models/user.model")

const createUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const user = await User_MODEL.create({
            username: username,
            email: email,
            phone: phone,
            password: password,
        })

        res.status(200).json({
            success: true,
            message: "user created",
            data: user

        })

    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            mes: "asdfsdf",
            massage: error
        })

    }
}


const finduser = async (req, res) => {
    const { username } = req.body
    try {
        const users = await User_MODEL.find({ username })
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            seccess: false,
            error: error.message,
        })

    }
}

const deleteuser = async (req, res) => {
    const { phone } = req.body
    try {
        const users = await User_MODEL.deleteOne({ phone })
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            seccess: false,
            error: error.message,
        })
    }
};


const loginuser = async (req, res) => {
    const { possword, email } = req.body
    try {
        const users = await User_MODEL.findOne({ email,password })
        res.status(200).json({
            success: true,
            users
        })
    }
    catch {
        res.status(400).json({
            seccess: false,      
            error: error.message,
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const user = await User_MODEL.findOneAndUpdate(
            { phone },
            {
                // username: username,
                // email: email,
                // phone: phone,
                password: password,
            },
            { new: true })

        res.status(200).json({
            success: true,
            message: "user created",
            data: user

        })

    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            massage: error.massage,
        })

    }
}



module.exports = {
    finduser,
    createUser,
    deleteuser,
    loginuser,
    updateUser
}