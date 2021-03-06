import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import 'bootstrap/dist/css/bootstrap.css';

// global state
import store from './store';
import { Provider } from './react-redux';

ReactDOM.render(
  <Provider store={ store }>
    <Counter/>
    <hr/>
    <Counter1/>
    <hr/>
    <Counter2/>
  </Provider>, 
  document.getElementById('root')
);