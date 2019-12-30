import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * Higher-Order Component高阶组件
 * 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
 * 高阶组件的作用其实就是为了组件之间的代码复用
 * const NewComponent = higherOrderComponent(OldComponent);
 * 
 * 类似于AOP面向切片模式：为原组件添加新功能
 * 
 * nested hoc
*/

// 日志组件
const logger = WrappedComponent => {
  return class extends React.Component{
    start = null;
    componentWillMount() {
      this.start = Date.now();
    }
    componentDidMount() {
      console.log(`${Date.now() - this.start}ms`); 
    }
    render () {
      return <WrappedComponent { ...this.pro } />
    }
  }
}

let Hello = logger(props  => (<h1>{ props.title }</h1>));
ReactDOM.render(
    <Hello title='Hello' />,
    document.getElementById('root')
);
