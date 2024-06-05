import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";

const buttons = [
	"AC", "÷",
	7, 8, 9, "x", 
	4, 5, 6, "-", 
	1, 2, 3, "+", 
	0, ".", "="
];

describe("Calculator", () => {
	it("renders correctly", () => {
		render(<App />);

		expect(screen.getByTestId('previous-calculation')).toBeInTheDocument();
		expect(screen.getByTestId('current-calculation')).toBeInTheDocument();

			buttons.forEach((button) => {
			expect(screen.getByText(button)).toBeInTheDocument();
		});
	});

	it('adds digits to the display correctly', () => {
		render(<App />);
		const display = screen.getByTestId("display");

		fireEvent.click(screen.getByText('1'));
		fireEvent.click(screen.getByText('2'));
		fireEvent.click(screen.getByText('3'));
		
		expect(display).toHaveTextContent("123");
	})


	it('clears the display', () => {
		render(<App />);
		const clearButton = screen.getByText("AC")
		const previousCalculation = screen.getByTestId('previous-calculation');
		const currentCalculation = screen.getByTestId('current-calculation');

		fireEvent.click(screen.getByText('1'));
		fireEvent.click(clearButton);

		expect(previousCalculation).toHaveTextContent('');
		expect(currentCalculation).toHaveTextContent('');



	})
});
