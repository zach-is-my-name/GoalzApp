import React from 'react';
import {connect} from 'react-redux';

export class CurrentGoal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let goalValue = this.props.currentGoal;
        let output = <div className="goal-output">
            <p>
                <b>Current Goal:</b>
                {this.props.currentGoal}
            </p>

        </div>;

        return (<div>{goalValue ? output: null}</div>);
    }
}

const mapStateToProps = (state, props) => {
    return {currentGoal: state.currentGoal, goalHistory: state.goalHistory}
}

export default connect(mapStateToProps)(CurrentGoal);
