import logo from "assets/img/Logo.svg";

const Footer = () => {
	return (
		<>
			<footer>
				<div id="footerWrap">
					<div className="footerLogo">
						<img src={logo} alt="" />
					</div>
					<div className="links">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservations</li>
							<li>Order Online</li>
							<li>Login</li>
						</ul>
					</div>
					<div className="contacts">
						<h4>Contacts</h4>
						<ul>
							<li>244 Food Street</li>
							<li>+34 555 2301</li>
							<li>book@littlelemon.com</li>
						</ul>
					</div>
					<div className="socials">
						<h4>Socials</h4>
						<div className="icons">
							<span>
								<i className="fab fa-twitter"></i>
							</span>
							<span>
								<i className="fab fa-facebook-square"></i>
							</span>
							<span>
								<i className="fab fa-instagram"></i>
							</span>
							<span>
								<i className="fab fa-pinterest"></i>
							</span>
							<span>
								<i className="fab fa-youtube"></i>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
