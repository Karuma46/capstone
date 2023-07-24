import { Routes, Route } from "react-router-dom";
import Booking from "booking";
import BookingInfo from "./bookingInfo";
import BookingPayment from "./bookingPayment";

const BookingRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Booking />} />
				<Route path="info" element={<BookingInfo />} />
				<Route path="pay" element={<BookingPayment />} />
			</Routes>
		</>
	);
};

export default BookingRoutes;
