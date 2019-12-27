import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * Refs: Refs provide a way to access DOM nodes or React elements created in the render method. 
 * ref三种形式：
 *  字符串 legacy
 *  函数 not recommended
 *  React.createRef() 调用结果 recommended useRef
*/

/**
 * as string
 * */ 
// class Calculator extends React.Component{
//   add = () => {
//     let num1 = parseInt(this.refs.num1.value),
//         num2 = parseInt(this.refs.num2.value);
//     this.refs.result.value = num1 + num2;
//   }
//   render() {
//     return (
//       <>
//         <input ref='num1' /> + <input ref='num2' /> <button onClick={this.add} >=</button> <input className='input_lg' ref='result' />
//       </>
//     )
//   }
// }

/** 
 * as function
 * 该函数会在virtual DOM挂载插入到页面中后执行，参数为该dom元素实例 
*/
// class Calculator extends React.Component{
//   add = () => {
//     let num1 = parseInt(this.num1.value) || 0,
//         num2 = parseInt(this.num2.value) || 0;
//     this.result.value = num1 + num2;
//   }
//   render() {
//     return (
//       <>
//         <input ref={this.num1} /> + <input ref={ this.num2 } /> <button onClick={this.add} >=</button> <input className='input_lg' ref={ this.result } />
//       </>
//     )
//   }
// }

/** 
 * as React.createRef() result
*/
class Calculator extends React.Component{
  num1 = React.createRef();
  num2 = React.createRef();
  result = React.createRef();

  add = () => {
    let num1 = parseInt(this.num1.current.value) || 0,
        num2 = parseInt(this.num2.current.value) || 0;
    this.result.current.value = num1 + num2;
  }
  render() {
    return (
      <>
        <input ref={this.num1} /> + <input ref={ this.num2 } /> <button onClick={this.add} >=</button> <input className='input_lg' ref={ this.result } />
      </>
    )
  }
}

class Username extends React.Component{
  inputRef = React.createRef();

  render () {
    return <input placeholder='Input your name here' ref={ this.inputRef } style={{ width: 300, marginBottom: 20 }} />
  }
}

class Form extends React.Component{
  username = React.createRef();

  getFocus = () => {
    this.username.current.inputRef.current.focus()
  }

  render() {
    return (
      <>
        <Calculator />
        <br/>
        <hr/>
        <Username ref={ this.username }/>
        <br/>
        <button onClick={ this.getFocus }>let input get focused</button>
      </>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));