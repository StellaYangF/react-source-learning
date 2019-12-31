import React from 'react';
import { NavLink, Route, Switch, Redirect  } from 'react-router-dom';
import UserAdd from './UserAdd.js'
import UserList from './UserList.js'
import UserDetail from './UserDetail.js'

export default function User(props) {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <ul className='nav nav-stack'>
          <li><NavLink to='/user/list'>User List</NavLink></li>
          <li><NavLink to='/user/add'>Add New User</NavLink></li>
        </ul>
      </div>
      <div className='col-md-10'>
        <Switch>
          <Route path='/user/list' component={ UserList }></Route>
          <Route path='/user/add' component={ UserAdd }></Route>
          <Route path='/user/detail/:id' component={ UserDetail }></Route>
          <Redirect to='/user/list'></Redirect>
        </Switch>
      </div>
    </div>
  )
}