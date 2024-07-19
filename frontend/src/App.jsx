import { Outlet } from "react-router-dom";
import HeaderBar from "./components/layout/HeaderBar";
import { useContext, useEffect } from "react";
import axios from "./utils/axios.customise";
import { AuthContext } from "./components/context/AuthContext";
import { Spin } from "antd";

function App() {
	const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
	useEffect(() => {
		const fetchAccount = async () => {
			setAppLoading(true);
			const res = await axios.get("/v1/api/account");
			if (res) {
				setAuth({
					isAuthenticated: true,
					user: {
						email: res.email,
						name: res.name,
					},
				});
			}
			setAppLoading(false);
		};

		fetchAccount();
	}, []);

	return (
		<>
			{appLoading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Spin />
				</div>
			) : (
				<>
					<HeaderBar />
					<Outlet />
				</>
			)}
		</>
	);
}

export default App;
