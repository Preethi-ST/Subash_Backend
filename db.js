const mongoose=require("mongoose")

// var mongoURL='mongodb+srv://subash_03:12345@cluster0.brumh.mongodb.net/test'
var mongoURL=process.env.MONGO_URL

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
  console.log("Mongo DB Connection Successfull");  
})

db.on('error',()=>{
  console.log("Mongo DB Connection failed");  
})

module.exports=mongoose