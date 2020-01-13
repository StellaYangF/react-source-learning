import React, { useRef, useState } from 'react';
export default function(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  let [ msg, setMsg ] = useState('');
  function login() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const users = JSON.parse(window.localStorage.getItem('users'));
    for (let i = 0; i< users.length; i++) {
      let user= users[i];
      if (user.username === username && user.password === password) {
        setMsg( '登录成功......');
        window.localStorage.setItem('logined', true);
        setTimeout(() => {
          return props.history.push('/profile');
        }, 2000)
      }
    }
  }
  return (
    <form>
    <div className="form-group">
      <label>Username</label>
      <input type='text' ref={ usernameRef } className='form-control' />
    </div>
    <div className="form-group">
    <label>Password</label>
      <input type='password' ref={ passwordRef } className='form-control' />
    </div>
    <div style={{ color:"#f9b" }}>{ msg }</div>
    <button onClick={ login } className='btn btn-info'>Login</button>
  </form>
  )
}