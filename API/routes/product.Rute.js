const { request } = require("http");
const exprees = require ("express");
const product_MODEL = require("../models/productmodel");
const { createproduct, deleteproduct, getAllProducts } = require("../controllers/product.controller");
const productRout = exprees.Router();

productRout.post("/creatProduct" , createproduct)
productRout.post("/deleteproduct", deleteproduct)
productRout.get("/getAllProducts", getAllProducts)

module.exports = productRout