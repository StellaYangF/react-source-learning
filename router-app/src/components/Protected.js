import React from 'react';
import { Redirect, Route } from '../react-router-dom';
export default function (props) {
  let { path, component: Component } = props;
  return (
    <Route path={ path } render= {
      propValue => window.localStorage.getItem('logined') ?
        <Component { ...props } /> :
        <Redirect to={ { pathname: path, state: { from: props.location.pathname } } }/>
    } />
  )
}