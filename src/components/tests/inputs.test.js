import { screen, render } from "@testing-library/react";
import FormInput from "components/inputs";

test("Renders the form input", () => {
	render(<FormInput label="Test Label" id="testInput" type="text" />);

	const label = screen.getByLabelText("Test Label");
	expect(label).toBeInTheDocument();
});
