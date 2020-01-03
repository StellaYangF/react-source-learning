import React, { useEffect, useState } from 'react';
import actions from '../store/actions/counter1';
import { bindActionCreators } from 'redux';
import store from '../store';

const boundActions = bindActionCreators(actions, store.dispatch);

export default function Counter (props) {
  let [ state, setState ] = useState({ number: 0 });
  useEffect(() => {
    return store.subscribe(() => setState({ number: store.getState().counter1.number }));
  }, []);
  return (
    <>
      <h1>Counter 1</h1>
      <h2>{ state.number }</h2>
      <h3>bindActionCreators</h3>
      <button onClick={ boundActions.increment1 } className='btn btn-info mr-10'>+</button>
      <button onClick={ boundActions.decrement1 } className='btn btn-info mr-10'>-</button>
    </>
  )
}