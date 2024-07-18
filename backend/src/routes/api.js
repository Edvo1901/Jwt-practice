const express = require("express");
const {
	createUser,
	handleLogin,
	getUsers,
} = require("../controllers/userController");
const delay = require("../middleware/delay");

const routerAPI = express.Router();

routerAPI.all("*", delay);

routerAPI.get("/", (req, res) => {
	return res.status(200).json("Hello world api");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);
routerAPI.get("/users", getUsers);

module.exports = routerAPI; //export default
