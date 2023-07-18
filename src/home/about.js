import chef1 from "assets/img/chef1.jpg";
import chef2 from "assets/img/chefs2.jpg";

const About = () => {
	return (
		<>
			<section id="aboutSection">
				<div className="sectionWrap">
					<div className="aboutText">
						<h1>Little Lemon</h1>
						<h5>Chicago</h5>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>
					<div className="aboutImages">
						<figure>
							<img src={chef1} alt="" />
						</figure>
						<figure>
							<img src={chef2} alt="" />
						</figure>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
