import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/** 
 * 实现useState
 * v1
*/
let memoizedState;
function useState(initialState) {
  memoizedState = memoizedState || initialState;
  function  setState(newState) {
    memoizedState = newState;
    render();
  }
  return [ memoizedState, setState ];
}

function Counter() {
  let [ count, setCount ] = useState(0);
  return <>
    <p>{ count }</p>
    <button className='btn btn-info mr-10' onClick={ () => setCount(count + 1) }>+</button>
    <button className='btn btn-info' onClick={ () => setCount(count - 1) }>-</button>
  </>
}

function render () {
  ReactDOM.render(<Counter/>, document.getElementById('root'));
}
render();