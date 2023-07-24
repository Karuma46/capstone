

import Footer from "components/footer";
import Header from "components/header";

import BookingForm from "./bookingForm";
import BookingTables from "./bookingTables";

const Booking = () => {
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
								<BookingForm />
							</div>
						</div>
					</section>
					<section>
						<div className="sectionWrap">
							<div className="sectionHeader">
								<h3 className="sectionTitle">Pick A Table</h3>
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
								<BookingTables />
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Booking;
