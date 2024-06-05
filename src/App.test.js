import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";

const buttons = ["AC", "÷", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];

describe("Calculator", () => {
	it("renders correctly", () => {
		render(<App />);

		expect(screen.getByTestId("previous-calculation")).toBeInTheDocument();
		expect(screen.getByTestId("current-calculation")).toBeInTheDocument();

		buttons.forEach((button) => {
			expect(screen.getByText(button)).toBeInTheDocument();
		});
	});

	it("adds digits to the display correctly", () => {
		render(<App />);
		const display = screen.getByTestId("display");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("2"));
		fireEvent.click(screen.getByText("3"));

		expect(display).toHaveTextContent("123");
	});

	it("limits the number of 0s at the start of the number", () => {
		render(<App />);
		const display = screen.getByTestId("display");
		const zeroButton = screen.getByText("0");

		fireEvent.click(zeroButton);
		fireEvent.click(zeroButton);
		fireEvent.click(zeroButton);

		expect(display.textContent).toBe("0");
	});

	it("limits the number of . in one line", () => {
		render(<App />);
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("."));
		fireEvent.click(screen.getByText("."));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("."));

		const displayText = currentCalculation.textContent;
		const periodCount = displayText.split(".").length - 1;

		expect(periodCount).toBe(1);
	});

	it("clears the display", () => {
		render(<App />);
		const clearButton = screen.getByText("AC");
		const previousCalculation = screen.getByTestId("previous-calculation");
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(clearButton);

		expect(previousCalculation).toHaveTextContent("");
		expect(currentCalculation).toHaveTextContent("");
	});

	it("selects the chosen function", () => {
		render(<App />);
		const previousCalculation = screen.getByTestId("previous-calculation");
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("+"));
		fireEvent.click(screen.getByText("1"));

		expect(previousCalculation).toHaveTextContent("1+");
		expect(currentCalculation).toHaveTextContent("1");
	});

	it("replaces the chosen function", () => {
		render(<App />);

		const previousCalculation = screen.getByTestId("previous-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("+"));
		fireEvent.click(screen.getByText("*"));

		expect(previousCalculation).toHaveTextContent("1*");
	});

	it("updates the previous calculation as user enters new function", () => {
		render(<App />);

		const previousCalculation = screen.getByTestId("previous-calculation");
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("+"));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("+"));
		fireEvent.click(screen.getByText("1"));

		expect(previousCalculation).toHaveTextContent("2+");
	});

	it('adds correctly', () => {
		render(<App />);
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("+"));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("="));

		expect(currentCalculation).toHaveTextContent("2");
	})

	it('subtracts correctly', () => {
		render(<App />);
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("2"));
		fireEvent.click(screen.getByText("-"));
		fireEvent.click(screen.getByText("1"));
		fireEvent.click(screen.getByText("="));

		expect(currentCalculation).toHaveTextContent("1");
	})

	it('multiplies correctly', () => {
		render(<App />);
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("2"));
		fireEvent.click(screen.getByText("*"));
		fireEvent.click(screen.getByText("2"));
		fireEvent.click(screen.getByText("="));

		expect(currentCalculation).toHaveTextContent("4");
	})

	it('divides correctly', () => {
		render(<App />);
		const currentCalculation = screen.getByTestId("current-calculation");

		fireEvent.click(screen.getByText("4"));
		fireEvent.click(screen.getByText("÷"));
		fireEvent.click(screen.getByText("2"));
		fireEvent.click(screen.getByText("="));

		expect(currentCalculation).toHaveTextContent("2");
	})
});
