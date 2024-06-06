import { INITIAL_STATE } from "./constants";
import evaluate from "./evaluate";

function reducer(state, action) {
	switch (action.type) {
		case "clear": {
			return INITIAL_STATE;
		}
		case "equals": {
			if (
				state.currentCalculation == "" ||
				state.previousCalculation == "" ||
				state.operation == ""
			) {
				return state;
			}
			return {
				...state,
				previousCalculation: "",
				currentCalculation: evaluate(state),
				operation: action.value,
				overwrite: true,
			};
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
					operation: action.value,
				};
			}

			return {
				...state,
				previousCalculation: evaluate(state),
				currentCalculation: "",
				operation: action.value,
			};
		}
		case "add-digit": {
			if (state.overwrite) {
				return {
					...state,
					currentCalculation: action.value.toString(),
					overwrite: false,
				};
			}

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

export default reducer;
