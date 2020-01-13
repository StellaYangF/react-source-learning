import React from 'react';
export default function (props)  {
 const { id } = props.match.params;
 const users = JSON.parse(window.localStorage.getItem('users'));
 // eslint-disable-next-line
 let user = users.filter( user => user.id == id);
 user = user[0];
  return (
    <>
    <h3>User Detail</h3>
    <div className="panel panel-default">
      <div className="panel-heading">{ user.username }</div>
      <div className="panel-body">
        { user.password }
      </div>
    </div>
    </>
  )
}  