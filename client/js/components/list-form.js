import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class ListForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
	}


	render() {
		return (
			<form className="list-form">
				<label htmlFor="text">Enter your steps here:</label>
				<input type="text" id="text" placeholder="Your steps" />
				<input type="submit" name="submit step" value="Enter Your Step"/>
			</form>
		)
	}
}

export default connect ()(ListForm);
