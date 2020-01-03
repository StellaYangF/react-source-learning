import React from 'react';
/**
 * 这个用的高阶组件
 * 1.从上下文中获取到Context {store}
 * 2.从store.getState()=>mapStateToProps=>对象成为OldComponent的属性对象
 * 3.负责订阅store状态变化事件，当仓库状态发生改变之后，要刷新当组件以及 OldComponent
 * 4.把actions进行绑定，然后把绑定后的结果boundActions作为属性对象传递给OldComponent
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */
export default function (mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
      return class extends React.Component {

      }
  }

  /* return function (OldComponent) {
      return function (props) {

      }
  } */
}