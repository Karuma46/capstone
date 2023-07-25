import { Routes, Route } from "react-router-dom";
import Booking from "booking";
import BookingInfo from "./bookingInfo";
import BookingPayment from "./bookingPayment";
import BookingSuccessPage from "./bookingSuccess";

const BookingRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Booking />} />
				<Route path="info" element={<BookingInfo />} />
				<Route path="pay" element={<BookingPayment />} />
				<Route path="success" element={<BookingSuccessPage />} />
			</Routes>
		</>
	);
};

export default BookingRoutes;
