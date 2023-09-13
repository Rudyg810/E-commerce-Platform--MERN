const slugify = require("slugify")
const cateogarymode = require("../models/cateogarymode.js")
const usermodel = require("../models/usermodel.js")

const CreateCateogarycontroller = async(req,res) =>{
try{
    const {name} = req.body
    if(!name){
        return res.status(400).send({message:"Name is required"})
    }
    const existingCateogary = await cateogarymode.findOne({name})
if(existingCateogary){
    return res.status(400).send({
        success: false,
        message: "Cateogary already exist"
    }
)}else{        
const cateogary = await new cateogarymode({ name, slug: slugify(name) }).save();
res.status(200).send({
    success:true, 
    message: "Cateogary created",
    cateogary
})}
}
catch(error){
    res.status(201).send({
        success: false,
        error,
        message:"Error in Cateogary"
    })
}
}

//update category
const UpdateCateogarycontroller = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await cateogarymode.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(201).send({
      success: false,
      error,
      message:error.message,
    });
  }
};
const cateogarycontroller = async (req,res) =>{
  try{
      const cateogary = await cateogarymode.find({})
      res.status(200).send({
        success: true,
        message: true,
        message: "All cateogaries",
        cateogary
      })
  }
  catch(error){
      res.status(500).send({
          message: "Error cateogary",
          error,
          success: false
      })
  }
}
const singlecateogarycontroller = async (req, res) => {
  try {
    const category = await cateogarymode.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
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
const deletecateogary = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    await cateogarymode.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category delted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting category",
    });
  }
};

module.exports = {deletecateogary, singlecateogarycontroller, cateogarycontroller, CreateCateogarycontroller, UpdateCateogarycontroller}