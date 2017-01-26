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
		document.getElementById('form-text').value='';
	}

	render() {
		return (
			<form className="footer-form" onSubmit={this.submitGoal}>
				<p>{this.props.currentGoal}</p>
				<label htmlFor="form-text">Enter your goal here:</label>
				<input type="text" id="form-text" placeholder="Your Goal" ref="input" required />
				<input type="submit" name="submit step" value="Enter Goal"/>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoal: state.currentGoal
	}
}

export default connect(mapStateToProps)(FooterForm);
