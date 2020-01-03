import React, { useEffect, useState } from 'react';
import { createStore, bindActionCreators } from '../redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

let initState = { number: 0 };

const reducer = (state = initState, action) => {
  switch(action.type) {
    case INCREMENT:
      return { number: state.number + 2 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initState);
function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}
const actionCreators = { increment, decrement };
const boundActions = bindActionCreators(actionCreators, store.dispatch);

export default function Counter (props) {
  let [ state, setState ] = useState({ number: 0 });
  useEffect(() => {
    return store.subscribe(() => setState({ number: store.getState().number }));
  }, []);
  return (
    <>
      <h1>Counter 2</h1>
      <h2>{ state.number }</h2>
      <button onClick={ () => store.dispatch({ type: INCREMENT }) } className='btn btn-info mr-10'>+</button>
      <button onClick={ () => store.dispatch({ type: DECREMENT }) } className='btn btn-info mr-10'>-</button>
      <button onClick={
        () => setTimeout(() => { store.dispatch({ type: INCREMENT }) }, 1000)
      } className='btn btn-danger mr-10'>async +</button>

      <hr/>
      <h3>bindActionCreators</h3>
      <button onClick={ boundActions.increment } className='btn btn-info mr-10'>+</button>
      <button onClick={ boundActions.decrement } className='btn btn-info mr-10'>-</button>
    </>
  )
}