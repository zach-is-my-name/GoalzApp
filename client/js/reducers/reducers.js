import * as actions from '../actions/actions';

const initialState = {
	currentGoal: [],
	currentGoalSteps: []
};

export const goalReducer = (state, action) => {
	state = state || initialState;
	if (action.type === actions.POST_SUCCESS) {
		let goal = action.goal;
		state = Object.assign({}, state, {currentGoal: goal
		});
		return state;
	}
	return state;
};

