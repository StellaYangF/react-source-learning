import React, { useContext } from 'react';
import RouterContext from './RouterContext';
import {pathToRegexp} from 'path-to-regexp';

/** 
 * route 代表一条路由规则
 * path 代表次规则的路径
 * component 代表要渲染的组件
*/

export default function (props) {
  let context = useContext(RouterContext);
  let { path = '/', component: Component, exact = false, render, children } = props;
  path = typeof path === 'string' ? path : path.pathname;
  let pathname = context.location.pathname;
  let keys = [];
  let regexp = pathToRegexp(path, keys, { end: exact });
  let result = pathname.match(regexp);
  let routeProps = {
      location: context.location,
      history: context.history,
  }

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
    routeProps.match = matchResult;
    if (Component) {
      return <Component { ...routeProps } />
    } else if (render) { // 受保护路由
      return render(routeProps);
    } else if (children) {
      return children(routeProps);
    } else {
      return null
    }
  } else {
    if (children) return children(routeProps);
    return null;
  }
}