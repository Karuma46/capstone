import { render, screen } from "@testing-library/react";
import About from "../about";

test("Renders the About section", () => {
	render(<About />);
	const heading = screen.getByText("Little Lemon");
	expect(heading).toBeInTheDocument();

	const subtitle = screen.getByText("Chicago");
	expect(subtitle).toBeInTheDocument();
});
