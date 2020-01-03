import React, { useEffect, useState } from 'react';
import actions from '../store/actions/counter2';
import { bindActionCreators } from 'redux';
import store from '../store';

const boundActions = bindActionCreators(actions);

export default function Counter (props) {
  let [ state, setState ] = useState({ number: 0 });
  useEffect(() => {
    return store.subscribe(() => setState({ number: store.getState().counter2.number }));
  }, []);
  return (
    <>
      <h1>Counter 2</h1>
      <h2>{ state.number }</h2>
      <button onClick={ boundActions.increment2 } className='btn btn-info mr-10'>+</button>
      <button onClick={ boundActions.decrement2 } className='btn btn-info mr-10'>-</button>
    </>
  )
}