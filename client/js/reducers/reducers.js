import * as actions from '../actions/actions';

const initialState = {
	currentGoal: '',
	currentGoalSteps: [],
	currentGoalId: ''
};

export const goalReducer = (state, action) => {
	state = state || initialState;
	if (action.type === actions.POST_SUCCESS) {
		let goal = action.goal.goal;
		let id = action.goal._id;
		state = Object.assign({}, state, {currentGoal: goal
		}, {currentGoalId: id});
		return state;
	}
	if (action.type === actions.PUT_STEP_SUCCESS) {
		let step = action.step.steps.slice(-1)[0];
		state = Object.assign({}, state, {currentGoalSteps: state.currentGoalSteps.concat(step)
		});
		return state;
	}
	return state;
};

