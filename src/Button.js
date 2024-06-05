// import "./App.css";

function handleButtonClick(value, dispatch) {
	if (value === "AC") {
		dispatch({ type: "clear" });
	} else if (value === "=") {
		dispatch({ type: "equals" });
	} else if (value === "÷" || value === "x" || value === "-" || value === "+") {
		dispatch({ type: "choose-function", value: value });
	} else {
		dispatch({ type: "add-digit", value: value });
	}
}

function Button({ dispatch, value, className}) {
	return (
		<button
      className={className}
			onClick={() => 
				handleButtonClick(value, dispatch)
			}
		>
			{value}
		</button>
	);
}

export default Button;
