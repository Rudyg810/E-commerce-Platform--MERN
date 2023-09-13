const slugify = require("slugify")
const productmodel = require("../models/productmodel.js")
const fs = require("fs")
const formidable_express = require("express-formidable")
const cateogarymode = require("../models/cateogarymode.js")

const Createproductcontroller = async(req,res) =>{
try{
    //formidable ka istemaal to get working url photos not just any strings
    const {name, slug, description,price, cateogary, quantity, shipping } = req.fields
    const {photo} = req.files
    
    switch(true){
        case !name:
            return res.status(201).send({ error: "Name is required"})
        case !description:
            return res.status(201).send({ error: "description is required"}) 
        case !price:
            return res.status(201).send({ error: "price is required"}) 
        case !cateogary:
            return res.status(201).send({ error: "cateogary is required"}) 
        case !quantity:
            return res.status(201).send({ error: "quantity is required"}) 
        case photo && photo.size > 1000000:
            return res.status(201).send({ error: "photo is required"}) 
        }
        const product = new productmodel({...req.fields, slug: slugify(name)})
        if(photo){
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save()
        res.status(200).send({
            success: true,
            product,
            message:"Product created"
        })
}
catch(error){
    res.status(201).send({
        success: false,
        error,
        message:"Error in product"
    })
}
}





const Updateproductcontroller = async(req,res) =>{
    try{
        //formidable ka istemaal to get working url photos not just any strings
        const {name, slug, description,price, cateogary, quantity } = req.fields
        const {photo} = req.files
        switch(true){
            case !name:
                return res.status(201).send({ error: "Name is required"})
            case !description:
                return res.status(201).send({ error: "description is required"}) 
            case !price:
                return res.status(201).send({ error: "price is required"}) 
            case !cateogary:
                return res.status(201).send({ error: "cateogary is required"}) 
            case !quantity:
                return res.status(201).send({ error: "quantity is required"}) 
            case photo && photo.size > 1000000:
                return res.status(201).send({ error: "photo is required"}) 
            }
            const product = await productmodel.findByIdAndUpdate(req.params.id, {...req.fields, slug: slugify(name)},{new: true}  )
            if(photo){
                product.photo.data = fs.readFileSync(photo.path)
                product.photo.contentType = photo.type
            }            
            await product.save()
            res.status(200).send({
                success: true,
                product,
                message:"Product updates"
            })
    }
    catch(error){
      console.log(error)
        res.status(201).send({
            success: false,
            error,
            message:"Error in product"
        })
    }}
    








const productcontroller = async (req,res) =>{
  try{
      const product = await productmodel.find({}).select("-photo").sort({quantity:-1}) //-1 for negative sort
      
      res.status(200).send({
        success: true,
        message: true,
        message: "All cateogaries",
        product
      })
  }
  catch(error){
      res.status(500).send({
          message: "Error product",
          error,
          success: false
      })
  }
}
const singleproductcontroller = async (req, res) => {
  try {
    const category = await productmodel.findOne({ slug: req.params.slug });
    const category_name = await cateogarymode.findById(category.cateogary);

    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
      category_name
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};
const deleteproduct = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    await productmodel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category delted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error,
      message: "Error while deleting category",
    });
  }
};
const productphotocontroller = async (req, res) => {
  try {
      const product = await productmodel.findById(req.params.pid).select("photo")
      
      if(product.photo.data){
          res.set("Content-type", product.photo.contentType)
      
          res.status(200).send(product.photo.data)
      }
      ;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error,
      message: "Error while photo of product",
    });
  }
};
const productfilter = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.cateogary = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const products = await productmodel.find(args);
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering Products",
      error,
    });
  }
};
const searchcontroller = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await productmodel.find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
      .select("-photo");
    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Product API",
      error,
    });
  }
};

module.exports = {searchcontroller, productfilter, productphotocontroller, deleteproduct, singleproductcontroller, productcontroller, Createproductcontroller, Updateproductcontroller}