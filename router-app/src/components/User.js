import React from 'react';
import { Link, Route } from '../react-router-dom';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import UserList from './UserList';

export default function(props) {
  return (
    <div className='row'>
      <div className='col-sm-2'>
        <ul className='nav nav-stack'>
          <li><Link to='/user/list'>User List</Link></li>
          <li><Link to='/user/add'>User Add</Link></li>
        </ul>
      </div>
      <div className='col-sm-10'>
        <Route path='/user/list' component={ UserList }/>
        <Route path='/user/add' component={ UserAdd }/>
        <Route path='/user/detail/:id' component={ UserDetail }/>
      </div>
    </div>
  )
}