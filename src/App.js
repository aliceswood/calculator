import React, { useReducer } from "react";
import "./App.css";
import Button from "./Button";
import reducer from "./reducer";
import formatNumber from "./formatNumber";
import { BUTTONS, INITIAL_STATE } from "./constants";

function App() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { previousCalculation, currentCalculation, operation } = state;

	const buttons = BUTTONS.map((buttonValue) => {
		let className;
		switch (buttonValue) {
			case "AC": {
				className = "reset-button";
				break;
			}
			case 0: {
				className = "zero-button";
				break;
			}
			default:
				className = "keypad-button";
		}

		return (
			<Button key={buttonValue} dispatch={dispatch} buttonValue={buttonValue} className={className}>
				{buttonValue}
			</Button>
		);
	});

	return (
		<div className="calculator-container">
			<div data-testid="display" className="display">
				<div data-testid="previous-calculation" className="previous-calculation">
					{formatNumber(previousCalculation)}
					{operation}
				</div>
				<div data-testid="current-calculation" className="current-calculation">
					{formatNumber(currentCalculation)}
				</div>
			</div>
			<div className="keypad-wrapper">
				{buttons}
			</div>
		</div>
	);
}

export default App;
