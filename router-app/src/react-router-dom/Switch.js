// avoid duplicating render components
import { useContext } from 'react';
import RouterContext from './RouterContext';
import { pathToRegexp } from 'path-to-regexp';
export default function (props) {
  const routerContext = useContext(RouterContext);
  const { pathname } = routerContext.location;
  let children = props.children;
  children = Array.isArray(children) ? children: [children];
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let { path = '/', exact: end = false } = child.props;
    let regexp = pathToRegexp(path, [], { end });
    if (pathname.match(regexp)) {
      // for 可退出循环 一旦找到一个满足路径匹配的组件 就回返回 退出循环
      return child;
    }
  }
  return null;
}