import { Button, Form, Input, notification } from "antd";
import { loginUserAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate()

	const onFinish = async (values) => {
		const {email, password} = values
		const res = await loginUserAPI(email, password)

		if (res && res.EC === 0) {
			localStorage.setItem("access_token", res.data.access_token)
			notification.success({
				message: "LOGIN USER",
				description: "Succeed"
			})
			navigate("/")
		} else {
			notification.error({
				message: "LOGIN USER",
				description: res?.EM ?? "Failed to login"
			})
		}
	};

	return (
		<div style={{ margin: "50px" }}>
			<Form
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;
