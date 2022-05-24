const mongoose = require("mongoose");

console.log("INSIDE THE PIZZAMODEL")

const appleSchema=mongoose.Schema({
 id   :{type: String, require},
 title : {type: String, require},
 price :{type: String, require},
 desc : {type: String, require},
 img : {type: String, require},
},{
    timestamps:true,
})

const appleModel=mongoose.model('apples',appleSchema)

module.exports=appleModel

console.log(appleModel)
