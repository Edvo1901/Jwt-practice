import { useContext, useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HeaderBar = () => {
	const [current, setCurrent] = useState("mail");
	const navigate = useNavigate();
	const { auth, setAuth } = useContext(AuthContext);

	const items = [
		{
			label: <Link to={"/"}>Home Page</Link>,
			key: "home",
			icon: <MailOutlined />,
		},
		...(auth.isAuthenticated
			? [
					{
						label: <Link to={"/user"}>Users</Link>,
						key: "users",
						icon: <MailOutlined />,
					},
			]
			: []),
		{
			label: `Options - ${auth.user.name}`,
			key: "options",
			icon: <SettingOutlined />,
			children: [
				...(auth.isAuthenticated
					? [
							{
								label: (
									<span
										onClick={() => {
											localStorage.clear("access_token");
											setAuth({
												isAuthenticated: false,
												user: {
													email: "",
													name: ""
												}
											})
											setCurrent("home");
											navigate("/");
										}}
									>
										Logout
									</span>
								),
								key: "logout",
							},
					]
					: [
							{
								label: <Link to={"/login"}>Login</Link>,
								key: "login",
							},
					]),
			],
		},
	];

	const onClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<Menu
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={items}
		/>
	);
};

export default HeaderBar;
