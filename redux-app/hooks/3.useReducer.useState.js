import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/** 
 * useReducer 实现 useState
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

function useState(initialState) {
  return useReducer((oldState, newState) => newState, initialState);
}

function Counter() {
  let [ count, dispatch ] = useState(0);
  return <>
    <p>{ count }</p>
    <button className='btn btn-info mr-10' onClick={ () => dispatch(count + 1)}>+</button>
    <button className='btn btn-info' onClick={ () => dispatch(count - 1) }>-</button>
  </>
}

function render () {
  ReactDOM.render(<Counter/>, document.getElementById('root'));
}
render();