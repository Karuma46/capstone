import logo from "assets/img/Logo.svg";
import Nav from "components/nav";

const Header = () => {
	return (
		<>
			<header>
				<div>
					<div className="logo">
						<img src={logo} alt="Little Lemon Logo" />
					</div>

					<Nav />
				</div>
			</header>
		</>
	);
};

export default Header;
