import { Outlet } from "react-router-dom";
import HeaderBar from "./components/layout/HeaderBar";

function App() {
	return (
		<>
			<HeaderBar />
			<Outlet />
		</>
	);
}

export default App;
