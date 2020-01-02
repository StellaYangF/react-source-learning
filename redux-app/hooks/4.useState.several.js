import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/** 
 * 多个 useState
*/
let memoizedStates = [];
let index = 0;
function useState(initialState) {
  console.log(memoizedStates);
  memoizedStates[index] = memoizedStates[index] || initialState;
  let currentIndex = index;
  function  setState(newState) {
    console.log(currentIndex);
    memoizedStates[currentIndex] = newState;
    render();
  }
  return [ memoizedStates[index++], setState ];
}

function Counter() {
  let [ count, setCount ] = useState(0);
  let [ name, setName ] = useState('Counter');
  return <>
    <h4>{ name }</h4>
    <button className='btn btn-info mr-10' onClick={ () => setName(name + Date.now()) }>+</button>
    <p>{ count }</p>
    <button className='btn btn-info mr-10' onClick={ () => setCount(count + 1)}>+</button>
  </>
}

function render () {
  index = 0;
  ReactDOM.render(<Counter/>, document.getElementById('root'));
}
render();