import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "home";
import BookingRoutes from "booking/routes";

import "./App.scss";

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
