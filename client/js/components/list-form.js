import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ListForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitStep = this.submitStep.bind(this);
	}

	submitStep(event) {
		event.preventDefault();
		this.props.dispatch(actions.addStep(this.refs.input.value));
		document.getElementById('list-text').value='';
	}


	render() {

		const stepsArray = this.props.currentGoalSteps.map((step, index) => {
			return <li key={index}>{step}</li>
		});

		return (
			<form className="list-form" onSubmit={this.submitStep}>
				<label htmlFor="list-text">Enter your steps here:</label>
				<input type="text" id="list-text" placeholder="Your steps" ref="input" />
				<input type="submit" name="submit step" value="Enter Your Step"/>
				<p>{stepsArray}</p>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoalSteps: state.currentGoalSteps
	}
}

export default connect (mapStateToProps)(ListForm);
