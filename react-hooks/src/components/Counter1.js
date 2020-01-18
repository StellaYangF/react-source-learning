import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react';

/** 
 * custom hooks
 * 组件之间重用一些逻辑状态，不复用 state 本身
*/
function useNumber() {
  const [ number, setNumber ] = useState(0);

  useEffect(() => {
   console.log('start a new timer') ;
   let $timer = setInterval(() => {
     setNumber(number => number + 1);
   }, 1000);
   return () => {
     console.log('Destroy the old timer');
     clearInterval($timer);
     $timer = null;
   }
  }, [])
  return [ number ];
}

function Counter1() {
  let [ number ] = useNumber();
  return (
    <>
      <h2>Counter1</h2>
  <p>{ number }</p>
    </>
  )
}

function Counter2() {
  let [ number ] = useNumber();
  return (
    <>
      <h2>Counter2</h2>
      <p>{ number }</p>
    </>
  ) 
}

function Parent() {
  let [ visible, setVisible ] = useState(true);
  return (
    <>
      { visible && (
        <>
          <Counter1 />
          <hr/>
          <Counter2 />
        </>
      ) }
      <hr/>
      <button onClick={ () => setVisible(visible => !visible) }>toggle show</button>
    </>
  )
}


/** 
 * middleware: 本质是 重写 dispatch 方法 增强逻辑
 *  logger
 *  promise
 *  thunk
 * 
*/ 

const initialState = 0;

function init(initialState) {
  return { number: initialState };
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { number: state.number + 1 };
    case 'decrement': 
      return { number: state.number - 1 };
    default:
      return state;
  }
}
function useLogger(reducer, initialState, init) {
  const [ state, dispatch ] = useReducer(reducer, initialState, init);
  let dispatchWithLogger = action => {
    console.log('old state: ', state);
    dispatch(action);
  }

  useEffect(() => {
    console.log('new state: ', state);
  }, [ state ]);

  return [ state, dispatchWithLogger ];
}

function Counter() {
  const [ state, dispatch ] = useLogger(reducer, initialState, init);
  return (
    <>
      <p>Count: { state.number }</p>
      <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
      <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
    </>
  )
}

export default Counter;