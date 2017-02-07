import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

export class GoalFormInput extends React.Component {
	constructor(props) {
		super(props);
		this.submitGoal = this.submitGoal.bind(this);
		this.selectGoal = this.selectGoal.bind(this);
	}

	submitGoal(event) {
		event.preventDefault();
		this.props.dispatch(actions.postGoals(this.refs.input.value));
		document.getElementById('form-text').value='';
	}

    componentDidMount() {
        this.props.dispatch(
            actions.fetchGoals()
        );
    }

		selectGoal(event) {
				// this.props.dispatch(actions.selectGoal(this.refs.select.value));
				// console.log(this.refs.select.value);
		}

	render() {
		let  myGoal;
		if (this.props.goalHistory[0]){
			 myGoal = this.props.goalHistory[0].goal
		} else {
			myGoal = "Goal History is undefined"
		}

		console.log(myGoal);
		// console.log(this.props.goalHistory[0].goal)
		//no
		// console.log(this.props.goalHistory[0].goal)

		// let goal = state.goalHistory[i].goal]


		const goalsDropDown = this.props.goalHistory.map((goal, index) => {
			return <option value={index} key={index}>{goal.index.goal}</option>
		});

		const goalSelector =
		 			<form className="goal-select">
						<select ref="select" onChange={this.selectGoal}>
							{goalsDropDown}
						</select>
					</form>

						const input =
						<form className="goal-input" onSubmit={this.submitGoal}>
							{/* <p>{this.props.currentGoal}</p> */}
							<label htmlFor="form-text">Enter your goal here:</label>
							<input type="text" id="form-text" placeholder="Your Goal" ref="input" required />
							<input type="submit" name="submit step" value="Enter Goal"/>
						</form>

						const goalValue = this.props.currentGoal;

						return (
						<div>
							{goalSelector}
							{!goalValue ? input : null}

						</div>
						)
	}
}

const mapStateToProps = (state, props) => {
	return {
		currentGoal: state.currentGoal,
		goalHistory: state.goalHistory,

	}
}

export default connect(mapStateToProps)(GoalFormInput);
