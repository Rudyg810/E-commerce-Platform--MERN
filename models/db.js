const mongoose = require("mongoose")

const DBconnect = ()=>{  mongoose.
  connect("mongodb://127.0.0.1:27017/imp", (err)=>{
  if(err) console.log('err') ;
  else
  console.log("Db connected")
  mongoose.set('strictQuery', false)})
 

}
module.exports = DBconnect
