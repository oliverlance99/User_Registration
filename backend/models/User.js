const mongoose = require("mongoose");

const User = mongoose.Schema({
	userName: {
		type: String
	},
	surName: {
		type: String
	},
	firstName: {
		type: String
	},
	midname: {
		type: String
	},
	age: {
		type: String
	},
	birthday: {
		type: String
	},
	gender: {
		type: String
	},
	email: {
		type: String
	},
})

module.exports = mongoose.model("User", User);