import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class FooterForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
		this.props.dispatch(actions.postGoals(this.refs.input.value));
	}


	render() {
		return (
			<form className="footer-form" onSubmit={this.submitGoal}>
				<p>Goal entered into unpit box rendered here</p>
				<label htmlFor="text">Enter your goal here:</label>
				<input type="text" id="text" placeholder="Your Goal" ref="input" required />
				<input type="submit" name="submit step" value="Enter Goal"/>
			</form>
		)
	}
}

export default connect()(FooterForm);
