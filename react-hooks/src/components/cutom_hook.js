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

// middleware one: useLogger
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

// middleware two: usePromise
function usePromise(reducer, initialState, init) {
  let [ state, dispatch ] = useReducer(reducer, initialState, init);
  let dispatchWithPromise = action => {
    if (action.payload && action.payload.then) {
      action.payload.then(payload => dispatch({ ...action, payload }));
    }
    else if (action.then && typeof action.then === 'function') {
      action.then(dispatch);
    } else {
      dispatch(action);
    }
  }
  return [ state, dispatchWithPromise ];
}

// middleware three: useThunk
function useThunk(reducer, initialState, init) {
  let [ state, dispatch ]  = useReducer(reducer, initialState, init);
  let dispatchWithThunk = action => {
    if (typeof action === 'function') {
      action(dispatchWithThunk, () => state);
    } else {
      dispatch(action);
    }
  }
  return [ state, dispatchWithThunk ];
}


function Counter11() {
  const [ state, dispatch ] = useLogger(reducer, initialState, init);
  return (
    <>
      <h2>dispatchWithLogger</h2>
      <p>Count: { state.number }</p>
      <button onClick={ () => dispatch({ type: 'increment' }) }>+</button>
      <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
    </>
  )
}

function Counter22() {
  const [ state, dispatch ] = usePromise(reducer, initialState, init);
  return (
    <>
      <h2>dispatch With Promise</h2>
      <p>Count: { state.number }</p>
      <button onClick={ () => dispatch(new Promise(resolve => {
        setTimeout(() => {
          resolve({ type: 'increment' })
        }, 1000);
      })) }>promise +</button>
       <button onClick={() => dispatch({
         type: 'increment',
         payload: new Promise(resolve => setTimeout(resolve,1000)),
       }) }>payload promise +</button>
      <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
    </>
  )
}


function Counter33() {
  const [ state, dispatch ] = useThunk(reducer, initialState, init);
  return (
    <>
      <h2>dispatch With Thunk</h2>
      <p>Count: { state.number }</p>
      <button onClick={ () => dispatch((dispatch, getState) => {
        setTimeout(() => {
          dispatch({ type: 'increment' });
        },1000);
      }) }>+</button>
      <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
    </>
  )
}

function Parent11() {
  return (
    <>
      <Counter11/>
      <hr/>
      <Counter22/>
      <hr/>
      <Counter33/>
    </>
  )
}

export default Parent11;