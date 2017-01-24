import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
	}


	render() {
		return (
			<form className="form">
				<label for="text">Enter your steps here:</label>
				<input type="text" placeholder="Your steps" />
				<input type="submit" name="submit step" value="Enter Your Step"/>
			</form>
		)
	}
}
