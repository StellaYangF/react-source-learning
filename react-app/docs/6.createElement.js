import React from './react';
import ReactDOM from './react-dom';

// let element = <h1 id='title'><span>hello</span><span>world</span></h1>
// babel自行转译

// native html element
// let element = React.createElement('h1', { id: 'title', style: { color: 'red',backgroundColor: 'yellow'}}, <span >hello</span>,<span>world</span>)
// let element = React.createElement('h1', { id: 'title', style: { color: 'red',backgroundColor: 'yellow'}}, React.createElement('span', {className: 'span'}, 'hello'),React.createElement('span', null, 'world'))

// function component
// function Button(props) {
// return <button className={ props.className }>{props.content}</button>
// }

// class component
class Button extends React.Component{
  state = {
    count: 0,
  }
  // setState(count) {
  //   this.state.count = count;
  // }
  render() {
  return <button className={ this.props.className } onClick={() => this.setState({ count: this.state.count + 1})}>{this.state.count}</button>
  }
}
// ReactDOM.render(<Button className='btn' content='Login'/>, document.getElementById('root'));

// 上面代码等同于下面的  Babel自动调用了React.createElement函数 来创建react元素对象

let element = React.createElement(Button, { className: 'btn', content: 'Login' });
// console.log(element);
ReactDOM.render(element, document.getElementById('root'));