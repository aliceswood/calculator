import React from "react";
import "./App.css";

function App() {
	const buttons = [
    "AC", "÷",
    7, 8, 9, "x", 
    4, 5, 6, "-", 
    1, 2, 3, "+", 
    0, ".", "="
  ];

	return (
		<div className="calculator-container">
			<div className="display">
				<div className="calculation">Placeholder for calculation</div>
				<div className="input-output">Placeholder for input/output</div>
			</div>
			<div className="keypad-wrapper">
				{buttons.map((key) => {

          const className = 
            key === "AC" ? "reset-button"
              : key === 0 ? "zero-button"
              : "keypad-button"

					return (
						<button key={key} className={className}>
							{key}
						</button>
					);
				})}
			</div>
		</div>
	);
}



export default App;
