const usermodel = require("../models/usermodel.js")
import { comparePassword, hashPassword} from "../utils/authhelper.js"
const bcrypt = require("../utils/authhelper.js")
import JWT from 'jsonwebtoken'    
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
        
}  }
catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error: error.message,
        });

}
}
//3rd login controller
const loginController = async(req,res)=>{
    try {
        const {email,password}= req.body
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Password or Username Invalid"
            })
        
        }
        //check user
    const user = await usermodel.findOne({email})
    if(!user){
        return res.status(404).send({
            succes: false,
            message:"Email not registered"
        })
    }
    const match = await comparePassword(password, user.password)
    if(!match){ 
        return res.status(200).send({
            succes: true,
            mesage:"Imvalid Password"

        })}
        const token = await JWT.sign({ _id: user._id}, process.env.JWT_SECTRET, {
            expiresIn = "7d",
        })
        res.status(200).send({
            success: true,
            message: "Login succesfull", 
            user:{
                name: user.name,
                email= user.email,
                phone = user.phone,
                pin = user.pin}, 
            token,
        });
    }
    catch (error) {
        console.log(error)
        res.status(201).send({
            succes: false,
            mesage:" login failed", 
            error
        })
      }
}

module.exports= {registerController, existingUser}