import { useState } from "react";
import FormInput from "components/inputs";

const BookingForm = ({ setShowTables }) => {
	const [booking, setBooking] = useState({
		date: "",
		timeslot: "8-10",
		occassion: "Birthday",
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

	const [occassions] = useState([
		{
			name: "Birthday",
			value: "Birthday",
		},
		{
			name: "Anniversary",
			value: "Anniversary",
		},
	]);

	const getMinDate = () => {
		var d = new Date();
		var today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
			2,
			0
		)}-${d.getUTCDate()}`;
		console.log(today);
		return today;
	};

	const getMaxDate = () => {
		var d = new Date();
		var today = `${d.getFullYear()}-${String(d.getMonth() + 2).padStart(
			2,
			0
		)}-${d.getUTCDate()}`;
		console.log(today);
		return today;
	};

	const handleBooking = (obj) => {
		setBooking({ ...booking, ...obj });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowTables(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Date:"
					type="date"
					id="date"
					value={booking.date}
					onChange={handleBooking}
					className="half"
					min={getMinDate()}
					max={getMaxDate()}
					required={true}
				/>

				<FormInput
					label="Available Times:"
					type="select"
					id="timeslot"
					value={booking.timeslot}
					options={timeslots}
					onChange={handleBooking}
					className="half"
					required={true}
				/>

				<FormInput
					label="Occassion:"
					type="select"
					id="occassion"
					value={booking.occassion}
					options={occassions}
					onChange={handleBooking}
					className="half"
					required={true}
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
					required={true}
				/>
				<button type="submit">Find a Table</button>
			</form>
		</>
	);
};

export default BookingForm;
