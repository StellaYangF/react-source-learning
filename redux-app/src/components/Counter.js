import React, { useState } from "react";
import { createStore } from 'redux';
export default function() {
  let [ counter, setCounter ] = useState({ number: 0 });
  let reducer = (state = { number: 0 }, action) => {
    if (action.type === 'increment') return { number: state.number + 1 };
  }
  let store = createStore(reducer);
  return (
    <>
      <p>{ counter.number }</p>
      <button onClick={ () => setCounter ({ number: counter.number + 1 }) } className='btn btn-primary'>+</button>
      <p>{ store.number }</p>
      <button onClick={ () => store.dispatch({ type: 'increment' }) } className='btn btn-primary'>+</button>
    </>
  )
}
