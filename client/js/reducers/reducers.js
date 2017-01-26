import * as actions from '../actions/actions';

console.log("top of reducer");

const initialState = {
	currentGoal: '',
	currentGoalSteps: ['Uno', 'Dos', 'tres'],
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
		console.log(state);
		console.log(action.step);
		// let step = action.step;
		console.log(step);
		console.log("data" + data);
		console.log("state " + state.currentGoalSteps);
		// state = Object.assign({}, state, {currentGoalSteps: state.currentGoalSteps.concat(step)
		// });
		return state;
	}
	return state;
};

