// avoid duplicating render components
import React, { useContext } from 'react';
import RouterContext from './RouterContext';
import { pathToRegexp } from 'path-to-regexp';
export default function (props) {
  const routerContext = useContext(RouterContext);
  const { pathname } = routerContext.location;
  let children = props.children;
  children = Array.isArray(children) ? children: [children];
  for (let i = 0;i < children.length; i++) {
    debugger;
    let child = children[i];
    let { path = '/', component, exact: end = false } = child;
    let regexp = pathToRegexp(path, [], { end });
    if (pathname.match(regexp)) {
      return child;
    }
  }
  return null;
}