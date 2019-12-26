import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 属性 父组件传过来的，自己不能控制，也不能改变
 * 状态 状态是组件自己内部产生维护的，自己维护，外界无法访问，唯一就是setState
 */

 /** 
  * 合成事件 React合成事件
  * 事件代理  冒泡 捕获
  * event并不是原始的dom对象，而是react自己二次封装的事件对象。
  * 可以实现复用
 */

 /** 
  * setState
  * 异步
  * 合并：调用多个setState会进行合并，放在一个队列中
  *       先保存起来，再一次执行
 */
 
 /** 
  * 组件中this是不是值得实例？
  * 一般来说类的方法中this是undefined
  * 如何让this指定组件实例
  * 1. 箭头函数
  * 2. 匿名函数
  * 3. bind绑定  
  *     1. render里绑 性能差：每次点击都创建一个bind返回的新函数
  *     2. constructor中绑 
 */
 
 class Counter extends React.Component{
   state = {
     number: 0,
     name: 'stella'
   }
   constructor() {
     super();
     this.add = this.add.bind(this);
   }
   add = (e) => {
     console.log(e); // 与dom原生Event不一样
   }
  //  当调用setState时会引起转态改变和组件刷新
  //  因为该方法有更新组件的功能
  /** 
   * setState方法
   * 传值
   * 传两个回调函数，可以拿到上一个state的值
   * 思考？
   * setState放回调
   *    this.setState会立刻更新
   *    不会批量更新
   *  通过batchUpdate批量更新来控制
   * 传一个值 会合并
  */
  
  mergeAdd = () => {
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
  }
  
  changeNumber= () => {
    // 回调
    // this.setState(prevState => ({ number: prevState.number + 1 }),() => console.log(1, this.state));
    // this.setState(prevState => ({ number: prevState.number + 2 }),() => console.log(2, this.state));
    // this.setState(prevState => ({ number: prevState.number + 3 }),() => console.log(3, this.state));
    
    this.setState({ number: this.state.number + 2 });
    this.setState({ number: this.state.number + 4 });
    this.setState({ number: this.state.number + 6 });
    setTimeout(()=> {
      this.setState({ number: this.state.number + 3 });
      console.log(this.state); // 9
    })
  }
  
   render() {
     return <>
     <p>{this.state.number}</p>
   <p>{ this.state.name }</p>
      <button className='btn btn-success' onClick={()=>this.setState({ number: this.state.number + 1 })}>+</button>
      <br/>
      <button className='btn btn-info' onClick={this.mergeAdd}>merge plus</button>
      <br/>
      {/* <button  className='btn btn-danger' onClick={(e) => this.add(e).bind(this)}>Click to get event</button> */}
      <button  className='btn btn-danger' onClick={(e) => this.add(e)}>Click to get event</button>
      <br/>
      <button className='btn btn-primary' onClick={ this.changeNumber }>changeNumber</button>
     </>
   }
 }
 
ReactDOM.render(<Counter/>, document.getElementById('root'));