import React from "react";
import "./App.css";

function App() {

  const numberButtons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, "."
  ]

  const operationKeys = [
    "÷", "x", "-", "+", "="
  ]
	return (
		<div className="calculator-container">
			<div className="display">
        <div className="calculation">
        Placeholder for calculation
        </div>
        <div className="input-output">
        Placeholder for input/output
        </div>
      </div>
			<button className="reset-button">
        AC
      </button>
      {numberButtons.map((number) => {
        return (<button className="number-button">{number}</button>)
      })}
      {operationKeys.map((number) => {
        return (<button className="operation-button">{number}</button>)
      })}
		</div>
	);
}

export default App;
