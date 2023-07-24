import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "components/inputs";

const BookingForm = () => {
	const [booking, setBooking] = useState({
		date: "",
		timeslot: "8-10",
		location: "Indoors",
		diners: 1,
	});

	const [timeslots] = useState([
		{
			name: "8-10am",
			value: "8-10am",
		},
		{
			name: "10-12pm",
			value: "10-12pm",
		},
		{
			name: "12-2pm",
			value: "12-2pm",
		},
		{
			name: "2-4pm",
			value: "2-4pm",
		},
	]);

	const [locations] = useState([
		{
			name: "Indoors",
			value: "Indoors",
		},
		{
			name: "Outdoors",
			value: "Outdoors",
		},
	]);

	const handleBooking = (obj) => {
		setBooking({ ...booking, ...obj });
	};

	return (
		<>
			<form>
				<FormInput
					label="Date:"
					type="date"
					id="date"
					value={booking.date}
					onChange={handleBooking}
					className="half"
				/>

				<FormInput
					label="Timeslot:"
					type="select"
					id="timeslot"
					value={booking.timeslot}
					options={timeslots}
					onChange={handleBooking}
					className="half"
				/>

				<FormInput
					label="Location:"
					type="select"
					id="location"
					value={booking.location}
					options={locations}
					onChange={handleBooking}
					className="half"
				/>
				<FormInput
					label="Number of Diners:"
					type="number"
					id="diners"
					value={booking.diners}
					max="10"
					min="1"
					onChange={handleBooking}
					className="half"
				/>
				<button>Find a Table</button>
			</form>
		</>
	);
};

export default BookingForm;
