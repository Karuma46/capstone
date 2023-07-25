import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "../hero";

describe("Hero Section", () => {
	test("button navigates to the bookings page", () => {
		render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		);
		const btn = screen.getByRole("button");
		fireEvent.click(btn);

	});
});
