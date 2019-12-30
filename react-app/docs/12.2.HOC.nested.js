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

// 多层高阶组件
// 包裹从内到外
// 渲染从外到内
const fromLocal = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: null };
    }

    componentWillMount() {
      const value = localStorage.getItem(this.props.field);
      value && this.setState({ value });
    }

    render () {
      return <WrappedComponent value={ this.state.value } />
    }
  }
}

const fromAjax = WrappedComponent => {
  return class extends React.Component{
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }
    componentDidMount() {
      fetch('/translate.json')
        .then(response => {
          return response.json()
        })
        .then(data => this.setState({ value: data[this.props.value] }));
    }
    render() {
      return <WrappedComponent value={ this.state.value } />
    }
  }
}

const UserName = props => (<input defaultValue = { props.value }/>);
const UserNameFromAjax = fromAjax(UserName);
const UserNameFromLocal = fromLocal(UserNameFromAjax);

ReactDOM.render(
    <UserNameFromLocal field='username' />,
    document.getElementById('root')
);
