import axios from "../utils/axios.customise";

const createUserAPI = (name, email, password) => {
	const URL_API = "/v1/api/register";
	const data = {
		name,
		email,
		password,
	};
	return axios.post(URL_API, data);
};

export {
	createUserAPI
}
