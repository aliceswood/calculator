import React, { useReducer } from "react";
import "./App.css";
import Button from "./Button";

const INITIAL_STATE = {
	previousCalculation: "",
	currentCalculation: "",
	operation: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "clear": {
			return INITIAL_STATE;
		}
		case "equals": {
		}
		case "choose-function": {
			if (state.currentCalculation === "" && state.previousCalculation === "") {
				return state;
			}
			if (state.previousCalculation === "") {
				return {
					...state,
					previousCalculation: state.currentCalculation,
					operation: action.value,
					currentCalculation: "",
				};
			}

			if (state.operation && state.currentCalculation === "") {
				return {
					...state,
					operation: action.value
				}
			}

			return {
				...state,
				previousCalculation: evaluate(state),
				currentCalculation: "",
				operation: action.value,
			};
		}
		case "add-digit": {
			if (action.value === 0 && state.currentCalculation === "0") {
				return state;
			}
			if (action.value === "." && state.currentCalculation.includes(".")) {
				return state;
			}

			return {
				...state,
				currentCalculation: `${state.currentCalculation || ""}${action.value}`,
			};
		}
	}
}

function evaluate({ currentCalculation, previousCalculation, operation }) {
	const current = parseFloat(currentCalculation);
	const previous = parseFloat(previousCalculation);
	let calculation = "";

	switch (operation) {
		case "+": {
			calculation = previous + current;
			break;
		}
		case "-": {
			calculation = previous - current;
			break;
		}
		case "*": {
			calculation = previous * current;
			break;
		}
		case "÷": {
			calculation = previous / current;
			break;
		}
	}

	return calculation.toString();
}

function App() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { previousCalculation, currentCalculation, operation } = state;

	const buttons = ["AC", "÷", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];

	return (
		<div className="calculator-container">
			<div data-testid="display" className="display">
				<div data-testid="previous-calculation" className="previous-calculation">
					{previousCalculation}
					{operation}
				</div>
				<div data-testid="current-calculation" className="current-calculation">
					{currentCalculation}
				</div>
			</div>
			<div className="keypad-wrapper">
				{buttons.map((value) => {
					const className =
						value === "AC" ? "reset-button" : value === 0 ? "zero-button" : "keypad-button";
					return (
						<Button key={value} dispatch={dispatch} value={value} className={className}>
							{value}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default App;
