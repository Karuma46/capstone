import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "components/footer";
import Header from "components/header";
import FormInput from "components/inputs";

const BookingInfo = () => {
	const navigate = useNavigate();
	const [info, setInfo] = useState({
		email: "",
		firstname: "",
		lastname: "",
		phonenumber: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/booking/pay");
	};

	return (
		<>
			<div id="container">
				<Header />
				<main>
					<section id="hero">
						<div className="sectionWrap">
							<div id="bookingSection">
								<div>
									<h1 className="displayTitle accentText m-0">
										Table Reservation
									</h1>
									<p className="leadText lightText">
										Select from a variety of tables. We can
										sit upto a party of 10!
									</p>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="sectionWrap">
							<div className="sectionHeader">
								<h3 className="sectionTitle">Payment Info</h3>
								<div>
									<span>
										<i className="fas fa-circle-chevron-left fa-lg">
											{" "}
										</i>
									</span>
									&nbsp; &nbsp;
									<span>
										<i className="fas fa-circle-chevron-right fa-lg">
											{" "}
										</i>
									</span>
								</div>
							</div>
							<div className="sectionContent">
								<form onSubmit={handleSubmit}>
									<FormInput
										label="Email Address *"
										type="email"
										value={info.email}
										className="light"
										required={true}
									/>

									<FormInput
										label="First Name *"
										type="text"
										value={info.firstname}
										className="light half"
										required={true}
									/>

									<FormInput
										label="Last Name"
										type="text"
										value={info.lastname}
										className="light half"
									/>

									<FormInput
										label="Phone Number"
										type="tel"
										value={info.phonenumber}
										className="light"
									/>

									<button type="submit">
										Payment Details
									</button>
								</form>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default BookingInfo;
