import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "components/footer";
import Header from "components/header";
import FormInput from "components/inputs";

const BookingPayment = () => {
	const navigate = useNavigate();

	const [pay, setPay] = useState({
		cardNumber: "",
		cvv: "",
		expiryDate: "",
		address: "",
		postalCode: "",
		city: "",
	});

	const handleChange = (obj) => {
		setPay({ ...pay, ...obj });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/booking/success");
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
										label="Card Number*"
										type="text"
										value={pay.cardNumber}
										className="light"
										required={true}
										onChange={handleChange}
									/>
									<FormInput
										label="CVV*"
										type="text"
										value={pay.cvv}
										className="light half"
										required={true}
										onChange={handleChange}
									/>

									<FormInput
										label="Expiry Date *"
										type="month"
										value={pay.expiryDate}
										className="light half"
										required={true}
										onChange={handleChange}
									/>

									<hr style={{ width: "100%" }} />

									<FormInput
										label="Address *"
										type="text"
										value={pay.address}
										className="light half"
										required={true}
									/>
									<FormInput
										label="Postal Code/Zip"
										type="text"
										value={pay.postalCode}
										className="light half"
									/>
									<FormInput
										label="City *"
										type="text"
										value={pay.city}
										className="light"
										required={true}
									/>

									<button type="submit">Pay</button>
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

export default BookingPayment;
