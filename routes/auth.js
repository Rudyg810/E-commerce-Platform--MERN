const express = require("express")
const router = express.Router()
const authcontroller = require("../controller/authcontroller.js")
router.post("/register", authcontroller.registerController )

module.exports= router