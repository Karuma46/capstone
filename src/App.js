import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "home";
import Booking from "booking";

import "./App.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/booking",
		element: <Booking />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
