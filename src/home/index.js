import Header from "components/header";
import Footer from "components/footer";
import Hero from "./hero";
import Specials from "./specials";
import Testimonials from "./testimonials";
import About from "./about";

const Home = () => {
	return (
		<>
			<div id="container">
				<Header />
				<main>
					<Hero />
					<Specials />
					<Testimonials />
					<About />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Home;
