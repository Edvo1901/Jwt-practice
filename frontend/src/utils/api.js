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

const loginUserAPI = (email, password) => {
	const URL_API = "/v1/api/login";
	const data = {
		email,
		password,
	};
	return axios.post(URL_API, data);
};

const getUserAPI = () => {
	const URL_API = "/v1/api/users";
	return axios.get(URL_API);
};

export {
	createUserAPI,
	loginUserAPI,
	getUserAPI
}
