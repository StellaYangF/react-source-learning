import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter (props) {
  let [ count, setCount]  = useState(0);
  return (
    <div>
<p>{ count}</p>
      <button className='btn' onClick={()=>setCount(count++)}>+</button>
    </div>
  )
}

ReactDOM.render(<Counter/>, document.getElementById('root'));