const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const db = require("./models/db.js")
const router = require("./routes/auth.js")
const bcrypt = require("bcryptjs")
const env = require("dotenv")
const server = express()
env.config();
const jsonwebtoken = require("jsonwebtoken")

server.use(express.json())
//dev not made yet
server.use(morgan("dev"))
server.use("/api/v1/auth", router)




server.listen(process.env.PORT ||8000, ()=>{
    console.log("serverl listening"+String(process.env.PORT))
})