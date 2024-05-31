import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";

describe("Calculator", () => {
	it("renders correctly", () => {
		render(<App />);

		expect(screen.getByText(/Placeholder for calculation/i)).toBeInTheDocument();
		expect(screen.getByText(/Placeholder for input\/output/i)).toBeInTheDocument();

		const buttons = [
      "AC", "÷",
      7, 8, 9, "x", 
      4, 5, 6, "-", 
      1, 2, 3, "+", 
      0, ".", "="
    ];

		buttons.forEach((button) => {
			expect(screen.getByText(button)).toBeInTheDocument();
		});
	});
});
