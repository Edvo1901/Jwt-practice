const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (name, email, password) => {
	try {
		// Hash password
		const hashPassword = await bcrypt.hash(password, saltRounds);

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

const loginUserService = async (email, password) => {
	try {
		const user = await User.findOne({ email: email });

		if (user) {
			const isMatchPassword = await bcrypt.compare(password, user.password);

			if (!isMatchPassword) return { EC: 2, EM: "Invalid password" };

			return {
				EC: 0,
				EM: "Success login",
			};
		} else {
			return {
				EC: 1,
				EM: "Invalid email/password",
			};
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = {
	createUserService,
	loginUserService,
};
