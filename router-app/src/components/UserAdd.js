import React, { useRef, useContext, useState, useEffect } from 'react';
import { Prompt } from '../react-router-dom';
import RouterContext from '../react-router-dom/RouterContext';
export default function (props)  {
  let { history } = useContext(RouterContext);
  let [ isBlocking, setIsBlocking ] = useState(false);
  let [ isSubmitting, setSubmitting ] = useState(false);
  let usernameRef = useRef();
  let passwordRef = useRef();
  let users = JSON.parse(window.localStorage.getItem('users'));
  users = users || [];
  const addUser = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const id = Date.now();
    if (!username || !password ) return;
    let user = { id, username, password };
    setIsBlocking(true);
    setSubmitting(true);
    mergeOptions(user);
    storeUsers();
  }

  useEffect(() => {
    if (isSubmitting) {
      redirect();
    }
  }, [isSubmitting]);

  function mergeOptions (user) {
   users.push(user);
  } 

  function redirect() {
    history.push('/user/list');
  }

  function storeUsers() {
    let usersJSON = JSON.stringify(users);
    window.localStorage.setItem('users', usersJSON);
  }
  return (
    <>
      <Prompt when={ isBlocking } message={ location => `请问你是否确定跳转到${location.pathname}` } />
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
    </>
  )
}