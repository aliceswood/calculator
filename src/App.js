import React, { useReducer } from "react";
import "./App.css";

const INITIAL_STATE = {
	previousCalculation: "",
	currentCalculation: "",
	operation: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "clear": {
			return INITIAL_STATE
		}
		case "equals": {
		}
		case "choose-function": {
		}
		case "add-digit": {
			return 	{
				...state,
				currentCalculation: `${state.currentCalculation}${action.payload}`,
			}	}
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const { previousCalculation, currentCalculation, operation } = state



	const buttons = [
		"AC", "÷",
		7, 8, 9, "x", 
		4, 5, 6, "-", 
		1, 2, 3, "+", 
		0, ".", "="
	];

	function handleButtonClick(key) {
		if (key === "AC") {
			dispatch({ type: "clear" });
		} else if (key === "=") {
			dispatch({ type: "equals" });
		} else if (key === "÷" || key === "x" || key === "-" || key === "+") {
			dispatch({ type: "choose-function", payload: key });
		} else {
			dispatch({ type: "add-digit", payload: key });
		}
	}

	return (
		<div className="calculator-container">
			<div className="display">
				<div className="previous-calculation" data-testid="previous-calculation">
					{previousCalculation}{operation}
				</div>
				<div className="current-calculation" data-testid="current-calculation">
					{currentCalculation}
				</div>
			</div>
			<div className="keypad-wrapper">
				{buttons.map((key) => {
					const className =
						key === "AC" ? "reset-button" : key === 0 ? "zero-button" : "keypad-button";
					return (
						<button key={key} className={className} onClick={() => {handleButtonClick(key)}}>
							{key}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default App;
