import {connect} from 'react-redux';
import React from 'react'
import Header from './header'
import ListForm from './list-form'
import FooterForm from './footer-form'

function App() {
  return(

    <div className="app">
      <Header />
      <ListForm />
      <FooterForm />
    </div>
)}

// export default connect ()(App);

export default App;