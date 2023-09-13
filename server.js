const   express = require("express")
const   mongoose = require("mongoose")
const   morgan = require("morgan")
const   router = require("./routes/auth.js")
const   bcrypt = require("bcryptjs")
//dotenv.config(;
const   cateogaryrouter = require ("./routes/cateogaryrouter.js")
const  server = express()
const   cors = require("cors")
const productrouter = require("./routes/productroute.js")
const formidable_express = require("express-formidable")
const   jsonwebtoken = require("jsonwebtoken")
const   DBconnect = require("./models/db.js")
DBconnect()
server.use(express.json())
server.use(cors())
//dev not made yet
server.use(morgan("dev"))
server.use("/api/v1/auth", router)
server.use("/api/v1/cateogary", cateogaryrouter)
server.use("/api/v1/product", productrouter)
 
server.listen(8080, ()=>{
    console.log("serverl listening"+"8080")
})    


