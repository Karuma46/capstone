import { useState } from "react";

const MobileNav = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<div className="mobileNav">
				<span onClick={() => setShowSidebar(true)}>
					<i className="fas fa-bars"></i>
				</span>
			</div>
			{showSidebar && (
				<div className="sideBarNav">
					<div className="sideBarNavClose">
						<span onClick={() => setShowSidebar(false)}>
							<i className="fas fa-times fa-lg"> </i>
						</span>
					</div>
					<div className="sideBarNavWrap">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservations</li>
							<li>Order Online</li>
							<li>Login</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Reservations</li>
					<li>Order Online</li>
					<li>Login</li>
				</ul>
			</nav>
			<MobileNav />
		</>
	);
};

export default Nav;
