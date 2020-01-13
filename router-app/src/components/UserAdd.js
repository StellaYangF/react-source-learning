import React, { useRef, useContext } from 'react';
import RouterContext from '../react-router-dom/RouterContext';
export default function (props)  {
  let { history } = useContext(RouterContext);
  let usernameRef = useRef();
  let passwordRef = useRef();
  let users = JSON.parse(window.localStorage.getItem('users'));
  users = !users || [];
  const addUser = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const id = Date.now();
    if (!username || !password ) return;
    let user = { id, username, password };
    mergeOptions(user);
    storeUsers();
    redirect();
  }

  function mergeOptions (user) {
   users.push(user);
  } 

  function redirect() {
    history.push('/user/list');
  }

  function storeUsers() {
    let usersJSON = JSON.stringify(users);
    window.localStorage.setItem('users', usersJSON);
    console.log(window.localStorage.getItem('users'));
  }
  return (
    <form>
      <div className="form-group">
        <label>Username</label>
        <input type='text' ref={ usernameRef } className='form-control' />
      </div>
      <div className="form-group">
      <label>password</label>
        <input type='password' ref={ passwordRef } className='form-control' />
      </div>
      <button onClick={ addUser } className='btn btn-info'>Add</button>
    </form>
  )
}