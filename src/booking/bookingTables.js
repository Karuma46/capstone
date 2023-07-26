import { useState } from "react";
import restaurant from "assets/img/restaurant.jpg";
import { Link } from "react-router-dom";

const TableCard = ({ table }) => {
	return (
		<>
			<div className="special">
				<div className="specialWrap">
					<div className="specialImage">
						<img src={restaurant} alt="salad" />
					</div>
					<div className="specialText">
						<div className="specialTitle fl-h-btw">
							<h3 className="cardTitle">{table.name}</h3>
							<h4 className="highlightText secondaryText">
								${table.price}
							</h4>
						</div>
						<div className="specialDescription">
							<br />
							<div className="fl-h-btw">
								<span>
									<i className="fas fa-users"></i>
								</span>
								<span>
									<i className="fas fa-sun"></i>
								</span>
							</div>
							<div className="specialCTA">
								<Link to="info">
									<button className="textBtn">
										Book Table
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const BookingTables = () => {
	const [tables] = useState([
		{
			name: "Balcony Table",
			price: 12.99,
		},
		{
			name: "Corner Table",
			price: 12.99,
		},
		{
			name: "Couples",
			price: 12.99,
		},
	]);

	return (
		<>
			<div id="tables" className="specials">
				{tables.map((i) => (
					<TableCard table={i} key={i.name} />
				))}
			</div>
		</>
	);
};

export default BookingTables;
