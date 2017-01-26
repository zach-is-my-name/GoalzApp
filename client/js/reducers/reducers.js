import * as actions from '../actions/actions';

const initialState = {
	currentGoal: '',
	currentGoalSteps: []
};

export const goalReducer = (state, action) => {
	state = state || initialState;
	if (action.type === actions.POST_SUCCESS) {
		console.log(action.goal);
		let goal = action.goal.goal;
		state = Object.assign({}, state, {currentGoal: goal
		});
		return state;
	}
	if (action.type === actions.PUT_STEP_SUCCESS) {
		let step = action.step;
		state = Object.assign({}, state, {currentGoalSteps: state.currentGoalSteps.concat(step)
		});
		return state;
	}
	return state;
};

