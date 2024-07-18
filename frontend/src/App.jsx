import { useEffect } from "react";
import axios from "./utils/axios.customise"

function App() {
	useEffect(() => {
		const fetchHello = async () => {
			const res = await axios.get("/v1/api/")

		}

		fetchHello()
	}, [])

	return (
		<>
			Hello world
		</>
	);
}

export default App;
