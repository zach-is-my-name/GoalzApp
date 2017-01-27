import * as actions from '../actions/actions';

console.log("top of reducer");

const initialState = {
	currentGoal: '',
	currentGoalSteps: [],
	currentGoalId: ''
};

export const goalReducer = (state, action) => {
	state = state || initialState;
	if (action.type === actions.POST_SUCCESS) {
		console.log("action goal ", action.goal._id);
		let goal = action.goal.goal;
		let id = action.goal._id;
		state = Object.assign({}, state, {currentGoal: goal
		}, {currentGoalId: id});
		return state;
	}
	if (action.type === actions.PUT_STEP_SUCCESS) {
		let step = action.step.step;
		state = Object.assign({}, state, {currentGoalSteps: state.currentGoalSteps.concat(step)
		});
		return state;
	}
	return state;
};

