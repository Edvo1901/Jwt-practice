import { useState } from "react";
import {
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
	{
		label: <Link to={"/"}>Home Page</Link>,
		key: "home",
		icon: <MailOutlined />,
	},
	{
		label: <Link to={"/user"}>Users</Link>,
		key: "users",
		icon: <MailOutlined />,
	},
	{
		label: "Options",
		key: "options",
		icon: <SettingOutlined />,
		children: [
			{
				label: <Link to={"/login"}>Login</Link>,
				key: "login",
			},
			{
				label: "Logout",
				key: "logout",
			},
		],
	},
];

const HeaderBar = () => {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click ", e);
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
