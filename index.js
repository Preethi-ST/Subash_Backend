require("dotenv").config();
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const User=require('./models/userModel')
const jwt=require('jsonwebtoken')

const PORT=process.env.PORT || 1337;

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

app.get('/',(req,res)=>{
  res.send("Ecommerce application is up and running")
})
app.post('/api/register',async(req,res)=>{
  console.log(req.body)
  try{
  const user=await User.create({
  // name:req.body.name,
  email:req.body.email,
  password:req.body.password, 
  })
  res.json({status:'ok'})
  }
  catch(err){
    console.log(err)
    res.json({status:'error',error:'Duplicate email'})
  }
})


app.post('/api/login',async(req,res)=>{
  const user=await User.findOne({
  email:req.body.email,
  password:req.body.password, 
  })
  if(user){

  // const token=jwt.sign({
  
  //   email:user.email,
  // }, 'my_secret_key')    
  
  const token=jwt.sign({
  
    email:user.email,
  },process.env.SECRET_KEY) 

  


  return res.json({status:'ok',user:token})
  }
  else{
    return res.json({status:'error',user:false})
  }
})

// app.get('/api/login',async(req,res)=>{

//   const token=req.headers['x-access-token']
//   try{
//   const decoded=jwt.verify(token,'my_secret_key')
//   const email=decoded email
//   }
//   catch(error)
//   {
//   console.log(error)
//   res.json({status:'error',error:'invalid token'}) 
//   }
  
  
// })



app.listen(PORT,()=>{
console.log("Server started on 1337")
})























