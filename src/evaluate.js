
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
	const result = calculation.toString();
	return result
}

export default evaluate;