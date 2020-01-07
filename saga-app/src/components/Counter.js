import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

function Counter(props) {
  return (
    <div>
      <p>{ props.number }</p>
      <button className='btn btn-info' onClick={ props.incrementAsync }>+</button>
    </div>
  )
}
export default connect(
  state => state,
  actions
)(Counter);