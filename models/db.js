const  mongoose = require( "mongoose")

const DBconnect =  async()=>{  mongoose.connect("mongodb://127.0.0.1:27017/web", (err)=>{
  if(err) console.log('err') ;
  else
  console.log("Ok")
  //schema aur connect ko krne se automatically collection bn jata
  mongoose.set('strictQuery', false) 

});

}
module.exports = DBconnect





