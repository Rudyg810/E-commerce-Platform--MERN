
const  mongoose = require("mongoose")
const cateogarymode = require("./cateogarymode")

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
    },

    description:    {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
cateogary: {
    type: mongoose.ObjectId,
    name: String,
    ref: 'cateogarymode',
    required: true
},
quantity:
{ type: Number,
required: true},

photo:{
    data: Buffer,
    contentType: String
},

shipping:{
    type: Boolean
},

},
{timestamps: true})

module.exports = mongoose.model("productmodel", userschema)
