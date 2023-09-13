const   express  =require(   "express")
const productmodel = require("../models/productmodel.js")
const { admincheck, requireSignin } =require(   "../middlewares/authmiddleware.js")
const  {searchcontroller, Createproductcontroller, Updateproductcontroller, singleproductcontroller, deleteproduct, productcontroller, productphotocontroller, productfilter  } =require(   "../controller/productcontroller.js")
const fs = require("fs")
const formidable_express= require("express-formidable")
const productrouter = express.Router()

productrouter.post("/create-product", requireSignin, admincheck, formidable_express(), Createproductcontroller)

productrouter.put("/update-product/:id", requireSignin, admincheck, formidable_express(), Updateproductcontroller);
productrouter.get("/product", productcontroller)
productrouter.get("/single-product/:slug", singleproductcontroller)
productrouter.get("/product-photo/:pid",formidable_express(), productphotocontroller)
productrouter.post("/filter-product", productfilter)
productrouter.get("/search-product/:keyword", searchcontroller)

productrouter.delete("/delete-product/:id", requireSignin, admincheck, deleteproduct)
module.exports = productrouter