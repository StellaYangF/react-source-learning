import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * Lifecycles: 只有类组件才有生命周期
 * Old: 
 *    组件的生命周期
 *    Initialization： 
 *       constructor:       setup props and state
 *    Mounting: 
 *       componentWillMount
 *       render
 *       componentDidMount
 *    Updation
 *       props
 *           componentWillReceiveProps
 *       states
 *           shouldComponentUpdate
 *           componentWillUpdate
 *           render
 *           componentDidUpdate
 *    Unmounting
 *           componentWillUnmount
 * New:
 *    
*/

class Counter extends React.Component{
  static defaultProps = {
    name: 'stella'
  }
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. 执行constructor函数，设置初始状态');
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillMount() {
    console.log('2. 即将挂载 componentWillMount')
  }
  render() {
    console.log('3. render 确定要显示virtual DOM是什么？');
    return (
      <>
        <p>{ this.state.count }</p>
        <button onClick={ this.handleClick }>+</button>
        <hr/>
        {
          this.state.count < 3 ? <ChildComponent count={this.state.count}/> : null
        }
      </>
    )
  }
  componentDidMount() {
    console.log('4. 挂载结束 componentDidMount')
  }
  componentWillReceiveProps(newProps) {
    console.log('5. 即将接收props变化 componentWillReceiveProps ',newProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('6. 组件应该更新 shouldComponentUpdate ', nextProps,  nextState);
    return nextState.count % 3 === 0;
  }
  componentWillUpdate() {
    console.log('7. 组件将要更新 componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('8. 组件更新结束 componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('9. 组件即将销毁 componentWillUnmount');
  }
}

class ChildComponent extends React.Component {
  componentWillReceiveProps(newProps) {
    console.log('ChildCounter componentWillReceiveProps', newProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
      console.log('ChildCounter 询问组件是否需要更新?');
      //return nextProps.count % 6 == 0;
      return true;
  }
  componentWillUpdate() {
      console.log('ChildCounter 组件将要更新');
  }
  componentDidUpdate() {
      console.log('ChildCounter 组件的最新状态已经同步到界面中去了');
  }
  componentWillUnmount() {
      console.log('ChildCounter 将要被销毁了');
  }
  render() {
      console.log('ChildCounter render');
      return (
          <h3>{this.props.count}</h3>
      )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));