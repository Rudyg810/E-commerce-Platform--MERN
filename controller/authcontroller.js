const usermodel = require("../models/usermodel.j")
const bcrypt = require("../utils/authhelper.js")

//1
const registerController = async(req,res)=>{
try{ 

    //checking for empty
    const {name, email,password, phone, pin} = req.body
    if(!name){
        return res.send({error:"Name is Required"})
    }
    if(!email){
        return res.send({error:"Email is Required"})
    }
    if(!password){
        return res.send({error:"Password is Required"})
    }
    if(!phone){
        return res.send({error:"Phone is Required"})
    }
    if(!pin){
        return res.send({error:"PIN is Required"})
    }
//2
    //schema ke naam se nhi jis naam se module import husa us naam se chlega
    const existingUser = await usermodel.findOne({email})
    if(existingUser){
        return res.status(200).send({
            succes:true,
            message:"Already Registered please login"
        })
    
        const hashedpass = await bcrypt.hashPassword(password)
    
        const user = await new usermodel({name, email, password: hashedpass, address, phone, pin }).save();
    
        res.status(201).send({
    
            succes: true, 
    
            message:"User created successfully",
    
            user
    
        })
        
}
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error: error.message,
        });

}
}

module.exports= {registerController}