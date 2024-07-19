import { notification, Table } from "antd";
import { useEffect, useState } from "react";
import { getUserAPI } from "../utils/api";

const UserPage = () => {
	const [dataSource, setDataSource] = useState([]);
	useEffect(() => {
		const fetchUser = async () => {
			const res = await getUserAPI();

			if (!res?.message) {
				setDataSource(res);
			} else {
				notification.error({
					message: "Unauthorised",
					description: res?.message
				})
			}
		};
		fetchUser();
	}, []);

	const columns = [
		{
			title: "ID",
			dataIndex: "_id",
		},
		{
			title: "Email",
			dataIndex: "email",
		},
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Role",
			dataIndex: "role",
		},
	];

	return (
		<div style={{ padding: 30 }}>
			<Table
				dataSource={dataSource}
				bordered
				columns={columns}
				rowKey={"_id"}
			/>
		</div>
	);
};

export default UserPage;
