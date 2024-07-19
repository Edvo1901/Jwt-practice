import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./components/RegisterPage.jsx";
import UserPage from "./components/UserPage.jsx";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { AuthWrapper } from "./components/context/AuthContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "user",
				element: <UserPage />,
			},
		],
	},
	{
		path: "register",
		element: <RegisterPage />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthWrapper>
			<RouterProvider router={router} />
		</AuthWrapper>
	</React.StrictMode>
);
