import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <div className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-heading'>
          <div className='navbar-brand'>Xiangju</div>
        </div>
      </div>
      <ul className='nav navbar-nav'>
        <li><Link to={{ pathname: '/' }}>Home</Link></li>
        <li><Link to='/user/18'>User</Link></li>
        <li><Link to='/profile/stella'>profile</Link></li>
      </ul>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <Route path='/' component={ Home } />
          <Route path='/user/:age' component={ User } />
          <Route path='/profile/:name' component={ Profile } />
        </div>
      </div>
    </div>
  </Router>
  ,document.getElementById('root')
)