import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { createUserAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const navigate = useNavigate()

	const onFinish = async (values) => {
		const {name, email, password} = values
		const res = await createUserAPI(name, email, password)

		if (res) {
			notification.success({
				message: "CREATE USER",
				description: "Succeed"
			})
			navigate("/login")
		} else {
			notification.error({
				message: "CREATE USER",
				description: "Error"
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
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: "Please input your name!",
						},
					]}
				>
					<Input />
				</Form.Item>

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

export default RegisterPage;
