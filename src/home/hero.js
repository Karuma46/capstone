import hero from "assets/img/hero.jpg";

const Hero = () => {
	return (
		<>
			<section id="hero">
				<div className="sectionWrap">
					<div id="heroText">
						<h1 className="displayTitle accentText">
							Little Lemon
						</h1>
						<h2 className="subTitle lightText">Chicago</h2>
						<br />
						<p className="lightText">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
						<br />
						<button>Reserve a Table</button>
					</div>
					<div id="heroImage">
						<div className="imageWrap">
							<img src={hero} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
