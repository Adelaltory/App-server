const product_MODEL = require("../models/productmodel")

const createproduct = async (req, res) => {
    try {
        const { name , price , image, quantity } = req.body
        const user = await product_MODEL.create({
            name : name,
            price: price,
            quantity:quantity,
            image:image,
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
            massage: error,
        })

    }
};

const deleteproduct = async (req, res) => {
    const { phone } = req.body
    try {
        const users = await product_MODEL.deleteOne({ phone })
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


const findproduct = async (req,res) => { 
    const { name } = req.body
    try{
        const product = await product_MODEL.findproduct({ name })
        res.status(200).json({
            success: true,
            
        })
    } catch ( error ) {
        res.status(400).json({
            success: false,
            error: error.massage
        })
    }
};

module.exports = { 
    createproduct,
    deleteproduct,
    findproduct,
}

