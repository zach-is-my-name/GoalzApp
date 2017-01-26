import 'isomorphic-fetch';

export const ADD_STEP = 'ADD_STEP';
export const addStep = (step) => ({
	type: ADD_STEP,
	step
});


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
	const url = `http://localhost:8080/goal`;
	return fetch(url, {method: 'POST', body:JSON.stringify({goal}),
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
