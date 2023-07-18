import { useState } from "react";
import salad from "assets/img/greek salad.jpg";
import bruchetta from "assets/img/bruchetta.jpg";
import dessert from "assets/img/lemon dessert.jpg";

const Special = ({ dish }) => {
	return (
		<div className="special">
			<div className="specialWrap">
				<div className="specialImage">
					<img src={dish.image} alt="salad" />
				</div>
				<div className="specialText">
					<div className="specialTitle fl-h-btw">
						<h3 className="cardTitle">{dish.name}</h3>
						<h4 className="highlightText secondaryText">
							${dish.price}
						</h4>
					</div>
					<div className="specialDescription">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam
						</p>

						<div className="specialCTA">
							<button className="textBtn">
								Order a delivery
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Specials = () => {
	const [dishes] = useState([
		{
			name: "Greek Salad",
			price: "12.99",
			image: salad,
		},
		{
			name: "Bruchetta",
			price: "5.99",
			image: bruchetta,
		},
		{
			name: "Lemon Dessert",
			price: "5.99",
			image: dessert,
		},
	]);

	return (
		<>
			<section id="specialsSection">
				<div className="sectionWrap">
					<div className="sectionHeader">
						<h2 className="sectionTitle">Specials</h2>
						<button>Online Menu</button>
					</div>

					<div className="specials">
						{dishes.map((dish) => (
							<Special dish={dish} key={dish.name} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Specials;
