const  express = require("express")
const  router = express.Router()
const  {admincheck, requireSignin} = require("../middlewares/authmiddleware.js")
const  {registerController, loginController} = require("../controller/authcontroller.js")
//sign in
router.post("/register", registerController )
//login
router.post("/login", loginController)
router.get("/test", requireSignin, admincheck,(req,res)=>
{
    res.json({
        message: "Gotccha"
    })
})
router.get("/Dashboard", requireSignin, (req,res) =>{
    res.status(200).send({ok:true})
} )

router.get("/admin", requireSignin, admincheck, (req,res) =>{
    res.status(200).send({ok:true})
} )

module.exports= router