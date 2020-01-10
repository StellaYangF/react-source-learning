import React, { useContext } from 'react';
import RouterContext from './RouterContext';

export default function (props) {
  let context = useContext(RouterContext);
  let { path, component: Component } = props;
  let pathname = context.location.pathname;
  if(pathname.startsWith(path)) {
    return <Component />
  }
  return null;
}