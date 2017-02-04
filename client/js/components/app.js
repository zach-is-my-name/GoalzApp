import {connect} from 'react-redux';
import React from 'react';
import Header from './header';
import StepsForm from './steps-form';
import GoalFormInput from './goal-form-input';
import CurrentGoal from './current-goal';

function App() {
  return(

    <div className="app">
      <Header />
      <StepsForm />
      <CurrentGoal />
      <GoalFormInput />
    </div>
)}

// export default connect ()(App);

export default App;
