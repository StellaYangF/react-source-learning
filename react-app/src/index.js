import React from './react';
import ReactDOM from './react-dom';

// let element = <h1 id='title'><span>hello</span><span>world</span></h1>
// babel自行转译

// native html element
// let element = React.createElement('h1', { id: 'title', style: { color: 'red',backgroundColor: 'yellow'}}, React.createElement('span', {className: 'span'}, 'hello'),React.createElement('span', null, 'world'))
// let element = React.createElement('h1', { id: 'title', style: { color: 'red',backggroundColor: 'yellow'}}, <span >hello</span>,<span>world</span>)

// function component
// function Button(props) {
// return <button className={ props.className }>{props.content}</button>
// }

// class component
class Button extends React.Component{
  render() {
    return <button className={ this.props.className }>{this.props.content}</button>
  }
}
let element = React.createElement(Button, { className: 'btn', content: 'Login' });
ReactDOM.render(element, document.getElementById('root'));