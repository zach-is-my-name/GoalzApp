import React from 'react';

export default class FormFooter extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
	}


	render() {
		return (
			<form className="form-footer">
				<label for="text">Enter your goal here:</label>
				<input type="text" placeholder="Your Goal" />
				<input type="submit" name="submit step" value="Enter Goal"/>
			</form>
		)
	}
}
