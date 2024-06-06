function handleButtonClick(buttonValue, dispatch) {
	if (buttonValue === "AC") {
		dispatch({ type: "clear" });
	} else if (buttonValue === "=") {
		dispatch({ type: "equals" });
	} else if (buttonValue === "÷" || buttonValue === "*" || buttonValue === "-" || buttonValue === "+") {
		dispatch({ type: "choose-function", value: buttonValue });
	} else {
		dispatch({ type: "add-digit", value: buttonValue });
	}
}

function Button({ dispatch, buttonValue, className}) {
	return (
		<button
      className={className}
			onClick={() => 
				handleButtonClick(buttonValue, dispatch)
			}
		>
			{buttonValue}
		</button>
	);
}

export default Button;
