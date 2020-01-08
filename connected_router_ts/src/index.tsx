import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Route exact={ true } path='/' component={ Home }></Route>
      <Route path='/counter' component={ Counter }></Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)