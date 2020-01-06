import React from 'react';
import actions from '../store/actions/counter1';
import { connect } from '../react-redux';

function Counter1(props) {
  let { number, increment1, decrement1 } = props;
  return (
    <>
      <h1>Counter 1</h1>
      <h2 className={ number < 1 ? "inactive" : "dark" }>{ number }</h2>
      <button onClick={ increment1 } className='btn btn-info mr-10'>+</button>
      <button onClick={ decrement1 } className='btn btn-info mr-10'>-</button>
    </>
  )
}

let mapStateToProps = state => state.counter1;
export default connect(mapStateToProps, actions)(Counter1)