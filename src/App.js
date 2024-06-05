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
			// edge case: switch out selected function
		}
		case "add-digit": {
			// edge case: starts with a 0
			// edge case: limit .
			
			return {
				...state,
				currentCalculation: `${state.currentCalculation || ""}${action.payload}`,
			};
		}
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { previousCalculation, currentCalculation, operation } = state;
	const buttons = [
		"AC", "÷", 
		7, 8, 9, "x", 
		4, 5, 6, "-", 
		1, 2, 3, "+", 
		0, ".", "="];

	return (
		<div className="calculator-container">
			<div className="display">
				<div data-testid="previous-calculation">{previousCalculation}</div>
				<div data-testid="current-calculation">
					{currentCalculation}
					{operation}
				</div>
			</div>
			<div className="keypad-wrapper">
				{buttons.map((value) => {
					const className =
						value === "AC" ? "reset-button" : value === 0 ? "zero-button" : "keypad-button";
					return (
						<Button 
							key={value}
							dispatch={dispatch} 
							value={value} 
							className={className}
						>
							{value}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default App;
