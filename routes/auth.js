const express = require("express")
const router = express.Router()
import {registerController, loginController} from "../controller/authcontroller.js"
const authcontroller = require("../controller/authcontroller.js")
//sign in
router.post("/register", authcontroller.registerController )
//login
router.post("/login", authcontroller.loginController)
module.exports= router