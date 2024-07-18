require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const createUserService = async (name, email, password) => {
	try {
		const user = await User.findOne({ email: email });
		if (user) return { EC: 1, EM: "User already exist" };

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
			// Validate password
			const isMatchPassword = await bcrypt.compare(
				password,
				user.password
			);

			if (!isMatchPassword) return { EC: 2, EM: "Invalid password" };

			// Create access token
			const payload = {
				email: user.email,
				name: user.name,
			};

			const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
				expiresIn: process.env.JWT_EXPIRE,
			});
			return {
				EC: 0,
				EM: "Success login",
				data: {
					access_token,
					user: {
						email: user.email,
						name: user.name,
					},
				},
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

const getUsersService = async () => {
	try {
		const result = await User.find({});
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = {
	createUserService,
	loginUserService,
	getUsersService,
};
