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
 
 class Counter extends React.Component{
   state = {
     number: 0,
   }
   add = (e) => {
     console.log(e); // 与dom原生Event不一样
   }
  //  当调用setState时会引起转态改变和组件刷新
  //  因为该方法有更新组件的功能
  
  mergeAdd() {
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
  }
  
   render() {
     return <>
     <p>{this.state.number}</p>
      <button className='btn btn-success' onClick={()=>this.setState({ number: this.state.number + 1 })}>+</button>
      <br/>
      <button className='btn btn-info' onClick={()=>this.mergeAdd()}>merge plus</button>
      <br/>
      <button  className='btn btn-danger' onClick={(e) => this.add(e)}>Click to get event</button>
      <br/>
      
     </>
   }
 }
 
ReactDOM.render(<Counter/>, document.getElementById('root'));