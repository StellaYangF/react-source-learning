import React, { useContext } from 'react';
import RouterContext from './RouterContext';
import {pathToRegexp} from 'path-to-regexp';

export default function (props) {
  let context = useContext(RouterContext);
  let { path, component: Component, exact = false } = props;
  let pathname = context.location.pathname;
  let params = [];
  let regexp = pathToRegexp(path, params, { end: exact });
  let result = pathname.match(regexp);
  if(result) {
    return <Component />
  }
  return null;
}