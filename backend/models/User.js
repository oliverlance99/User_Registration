const mongoose = require("mongoose");

const User = mongoose.Schema({
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
})

module.exports = mongoose.model("User", User);