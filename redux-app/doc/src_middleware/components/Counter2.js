import React from 'react';
import actions from '../store/actions/counter2';
import { connect } from '../react-redux';

function Counter2(props) {
  let { number, increment2, decrement2 } = props;
  return (
    <>
      <h1>Counter 2</h1>
      <h2 className={ number < 1 ? "inactive" : "dark" }>{ number }</h2>
      <button onClick={ increment2 } className='btn btn-info mr-10'>+</button>
      <button onClick={ decrement2 } className='btn btn-info mr-10'>-</button>
    </>
  )
}

let mapStateToProps = state => state.counter2;
export default connect(mapStateToProps, actions)(Counter2);