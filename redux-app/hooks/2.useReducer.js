import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/** 
 * 实现useReducer( reducer, initialArg, init )
*/
let memoizedState;
/**
 * 
 * @param {*处理器，接收state, action两个参数，返回新的状态} reducer 
 * @param {*初始状态的属性值} initialArg 
 * @param {*状态属性值的初始化函数} init 
 */
function useReducer(reducer, initialArg, init) {
  let initialState = 0;
  initialState =  init !== undefined ? init(initialArg) : initialArg; // 对象或者是普通值
  function dispatch(action) {
    memoizedState = reducer(memoizedState, action);
    render();
  }
  memoizedState = memoizedState || initialState;
  return [ memoizedState, dispatch ];
}

const initialArg = 0;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count ? state.count - 1 : state.count };
    default:
      throw new Error();
  }
}
function init(initialArg) {
  return { count : initialArg }
}
function Counter() {
  let [ state, dispatch ] = useReducer(reducer, initialArg, init);
  return <>
    <p>{ state.count }</p>
    <button className='btn btn-info mr-10' onClick={ () => dispatch({ type: INCREMENT }) }>+</button>
    <button className='btn btn-info' onClick={ () => dispatch({ type: DECREMENT }) }>-</button>
  </>
}

function render () {
  ReactDOM.render(<Counter/>, document.getElementById('root'));
}
render();