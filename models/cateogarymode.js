
const  mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    slug:{
        type:String, 
        lowercase: true,
        required: true
    }})

module.exports = mongoose.model("cateogarymode", userschema)
 