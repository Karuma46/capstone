import logo from "assets/img/Logo.svg";
import Nav from "components/nav";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header>
				<div id="headerWrap">
					<div className="logo">
						<Link to="/">
							<img src={logo} alt="Little Lemon Logo" />
						</Link>
					</div>

					<Nav />
				</div>
			</header>
		</>
	);
};

export default Header;
