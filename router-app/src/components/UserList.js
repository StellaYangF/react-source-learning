import React, { useContext } from 'react';
import RouterContext from '../react-router-dom/RouterContext';
export default function (props)  {
  const users = JSON.parse(window.localStorage.getItem('users'));
  const { history } = useContext(RouterContext);

  function toDetail(id) {
    history.push(`/user/detail/${id}`);
  }

  const listItems = users && users.map((user, index) =>  (
      <tr className={ index % 2 === 0 ? "danger" : ""} key={ user.id } onClick={ () => toDetail(user.id) }>
        <td>{ user.id }</td>
        <td>{ user.username }</td>
        <td>{ user.password }</td>
      </tr>
      )
  );
  return (
    <>
      <h3>User List</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          { listItems }
        </tbody>
      </table>
    </>
  )
}