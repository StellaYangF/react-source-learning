import React from 'react';
import { withRouter } from '../react-router-dom';

function NavHeader (props) {
  return (
    <div className="navbar-heading">
        <div className="navbar-brand" onClick={ () => props.history.push('/') }>{ props.title }</div>
    </div>
  )
}

export default withRouter(NavHeader);