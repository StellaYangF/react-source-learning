import React, { useContext } from 'react';
import RouterContext from './RouterContext';
import {pathToRegexp} from 'path-to-regexp';

export default function (props) {
  let context = useContext(RouterContext);
  let { path, component: Component, exact = false } = props;
  let pathname = context.location.pathname;
  let keys = [];
  let regexp = pathToRegexp(path, keys, { end: exact });
  let result = pathname.match(regexp);
  if(result) {
    let [ url, ...values ] = result;
    let paramNames = keys.map(item => item.name);
    let memo = {}
    let params = values.reduce((memo, val, index) => {
      memo[paramNames[index]] = val;
      return memo;
    }, memo);
    let matchResult = {
      url,
      path,
      isExact: pathname === url,
      params,
    }
    let props = {
      location: context.location,
      history: context.history,
      match: matchResult,
    }
    return <Component { ...props } />
  }
  return null;
}