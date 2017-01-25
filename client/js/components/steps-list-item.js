import React from 'react';
import {connect} from 'react-redux';

function ListItem(props) {
return(
  <div className="ListItem">
    {props.text}
  </div>
);

};

export default connect ()(ListItem);
