import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class StepsForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitStep = this.submitStep.bind(this);
	}

	submitStep(event) {
		event.preventDefault();
		this.props.dispatch(actions.putStep(this.refs.input.value));
		document.getElementById('list-text').value='';
	}


	render() {

		const stepsArray = this.props.currentGoalSteps.map((step, index) => {
			return <li key={index}>{step}</li>
		});

		const goalValue = this.props.currentGoal;
		const stepsForm =
			<form className="steps-form" onSubmit={this.submitStep}>
				<label htmlFor="list-text">Enter your steps here:</label>
				<input type="text" id="list-text" placeholder="Your steps" ref="input" />
				<input type="submit" name="submit step" value="Enter Your Step"/>
				<p>{stepsArray}</p>
			</form>

		return (<div> {goalValue ? stepsForm : null} </div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoal: state.currentGoal,
		currentGoalSteps: state.currentGoalSteps
	}
}

export default connect (mapStateToProps)(StepsForm);
