import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "home";
import BookingRoutes from "booking/routes";

import "./App.scss";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	},
// 	{
// 		path: "/booking",
// 		element: <BookingRoutes />,
// 	},
// ]);

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/booking/*" element={<BookingRoutes />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
