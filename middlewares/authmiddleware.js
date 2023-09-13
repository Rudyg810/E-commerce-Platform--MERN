const JWT = require( "jsonwebtoken")
const usermodel = require( "../models/usermodel")

//using the token to authenticate, email/pass is suprisingly not enough for it.
const requireSignin = async (req,res,next) =>{
    
    const {token} = req.headers.authorization
    //try req.headers.authorization
    try{ 
        //so this decode actually stores data of whole user
    const decode = JWT.verify(req.headers.authorization, 'HGFHGEAD1212432432')
    req.user = decode
    next()}
    catch(err){
        console.log(err)
  }
}

//only if this process is deleteOne, then only the next procedure would happen
// router.get("/test",middleware1, middleware2, testcontroller)
const admincheck = async (req,res,next) =>{
    
    try{ 
        const user = await usermodel.findById(req.user._id)
        if(  user.role !== 1){
            res.status(201).json({success: false, message:"Unsuccesful attempt, Admin auth failed"})
        }    else{
                    next()}}
            catch(err){
                    console.log(err)
            }}
module.exports = { admincheck, requireSignin}