require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	const white_lists = ["/", "/register", "/login"];

	if (white_lists.find((item) => `/v1/api${item}` === req.originalUrl)) {
		return next();
	}

	if (req.headers && req.headers.authorization) {
		const token = req.headers.authorization.split(" ")[1];

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			return next();
		} catch (error) {
			return res.status(401).json({
				message: "Expired/Invalid access token",
			});
		}
	} else {
		return res.status(401).json({
			message: "Invalid access token",
		});
	}
};

module.exports = auth;
