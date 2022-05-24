// console.log("INSIDE THE USER MODEL....")

// const mongoose=require("mongoose");

// const userSchema = mongoose.Schema(
//     {
//       name: { type: "String", required: true },
//       email: { type: "String", unique: true, required: true },
//       password: { type: "String", required: true },
//     },
//     { timestaps: true }
//   );


//   const User=mongoose.model('User',userSchema);



//   module.exports = User;


const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		// name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},
	// { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model








