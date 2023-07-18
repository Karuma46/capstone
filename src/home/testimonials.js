const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="userAvatar">
				<div className="avatarWrap">
					<img src="" alt="" />
				</div>
			</div>
			<div className="review">
				<div className="reviewTitle">
					<h4>Steve</h4>
					<div className="reviewStars">
						<span>
							<i className="fas fa-star fa-sm"></i>
							<i className="fas fa-star fa-sm"></i>
							<i className="fas fa-star fa-sm"></i>
							<i className="fas fa-star fa-sm"></i>
							<i className="fas fa-star fa-sm"></i>
						</span>
					</div>
				</div>
				<div className="reviewText">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="textBtn">Read More</button>
				</div>
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<>
			<section id="testimonialsSection">
				<div className="sectionWrap">
					<div className="sectionTitle">
						<h2>Testimonials</h2>
					</div>
					<div id="testimonials">
						<Testimonial />
						<Testimonial />
						<Testimonial />
						<Testimonial />
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
