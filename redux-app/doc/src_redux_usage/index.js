import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <>
    <Counter1/>
    <hr/>
    <Counter2/>
  </>, 
  document.getElementById('root')
);