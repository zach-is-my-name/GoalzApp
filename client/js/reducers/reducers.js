import * as actions from '../actions/actions';

const initialState = {
	currentGoal: '',
	currentGoalSteps: [],
	currentGoalId: '',
	goalHistory: []
};

export const goalReducer = (state, action) => {
	state = state || initialState;




	if (action.type === actions.POST_SUCCESS) {
		let goal = action.goal.goal;
		let id = action.goal._id;
		state = Object.assign({}, state, {currentGoal: goal}, {currentGoalId: id});
		return state;
	}
	if (action.type === actions.PUT_STEP_SUCCESS) {
		let step = action.step.steps.slice(-1)[0];
		state = Object.assign({}, state, {currentGoalSteps: state.currentGoalSteps.concat(step)
		});
		return state;
	}
	if (action.type === actions.FETCH_SUCCESS) {
	 	let goalsArray = [];
		let stepsArray;
		for (var i = 0; i < action.goals.length; i++) {
	 		goalsArray[i] = action.goals[i].goal;
			// stepsArray[i] = (action.goals[i].steps);
		}
		state = Object.assign({}, state, {goalHistory: state.goalHistory.concat(goalsArray)
		});
		return state;
	}
	if (action.type === actions.SELECT_GOAL) {
		state = Object.assign({}, state, {currentGoal: action.selectedGoal})
		return state;
	}

	return state;
};
