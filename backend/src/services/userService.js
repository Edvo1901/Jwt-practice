const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (name, email, password) => {
	try {
		// Hash password
		const hashPassword = await bcrypt.hash(password, saltRounds)

		// Save user to database
		let result = await User.create({
			name: name,
			email: email,
			password: hashPassword,
			role: "USER", 
		});
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = {
	createUserService,
};
