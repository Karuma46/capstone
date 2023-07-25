import { useNavigate } from "react-router";
import Footer from "components/footer";
import Header from "components/header";

const BookingSuccessPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<div id="container">
				<Header />
				<main>
					<section id="hero">
						<div className="sectionWrap">
							<div id="bookingSection">
								<div>
									<span>
										<i className="fas fa-circle-check fa-5x accentText"></i>
									</span>
								</div>
								<div>
									<h1 className="displayTitle accentText m-0">
										Table Reservation Successful!
									</h1>
									<p className="leadText lightText">
										Thank you for choosing Little Lemon. See
										you soon!
									</p>
								</div>
								<br />
								<br />
								<div>
									<button onClick={() => navigate("/")}>
										Go Back Home
									</button>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default BookingSuccessPage;
