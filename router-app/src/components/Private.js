import React from 'react';
import { Redirect, Route } from '../react-router-dom';
export default function (props) {
  let { path, component: Component } = props;
  return (
    <Route path={ path } render= {
      routeProps => window.localStorage.getItem('logined') ?
        <Component { ...routeProps } /> :
        <Redirect to={ { pathname: '/login', state: { from: routeProps.location.pathname } } }/>
    } />
  )
}

/**
 * Route 组件里渲染组件 三种方式：
 * 1. component 最简单、直接，但不能加入任何的逻辑判断
 * 2. render 是一个函数，当路径匹配的时候，会渲染render放的返回值
 * 3. children 也是一个函数，效果同上
 */