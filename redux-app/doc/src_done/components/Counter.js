import React from 'react';
import actions from '../store/actions/counter';
import { connect } from '../react-redux';

function Counter(props) {
  let { number, increment, decrement } = props;
  return (
    <>
      <h1>Counter</h1>
      <h2 className={ number < 1 ? "inactive" : "dark" }>{ number }</h2>
      <button onClick={ increment } className='btn btn-info mr-10'>+</button>
      <button onClick={ decrement } className='btn btn-info mr-10'>-</button>
    </>
  )
}

let mapStateToProps = state => state.counter;
export default connect(mapStateToProps, actions)(Counter);