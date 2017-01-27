import 'isomorphic-fetch';

export const PUT_STEP_SUCCESS = 'PUT_STEP_SUCCESS';
export const putStepSuccess = (step) => ({
	type: PUT_STEP_SUCCESS,
	step
});

export const PUT_STEP_ERROR = 'PUT_STEP_ERROR';
export const putStepError = (step, error) => ({
	type: PUT_STEP_ERROR,
	step,
	error
});

export const putStep = step => (dispatch, getState) => {
	const state = getState();
	const steps = state.currentGoalSteps.concat(step);
	console.log(steps);
    const url = `/goal/${state.currentGoalId}`
    return fetch(url, {method:'PUT', body:JSON.stringify({steps}), 
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },}).then(response => {
        	console.log(response);
      if (!response.ok){
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }   
        return response.json();    
    })
    .then(data => {
    	console.log(data);
    	// console.log(step);
     //  	data.step = step;
      	console.log(data);
       dispatch(putStepSuccess(data))
     })
     .catch(error =>
      dispatch(putStepError(error))
    );
};

export const POST_SUCCESS = 'POST_SUCCESS';
export const postSuccess = (goal) => ({
	type: POST_SUCCESS,
	goal
});

export const POST_ERROR = 'POST_ERROR';
export const postError = (goal, error) => ({
	type: POST_ERROR,
	goal,
	error
});

export const postGoals = goal => dispatch => {
	return fetch('/goal', {method: 'POST', body:JSON.stringify({goal}),
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },}).then(response => {
		console.log(response);
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data =>
		dispatch(postSuccess(data))
	)
	.catch(error =>
		dispatch(postError(error))
	);
};
