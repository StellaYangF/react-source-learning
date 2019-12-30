import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * render props
 * 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 * 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑
 * render prop 是一个用于告知组件需要渲染什么内容的函数 prop
 * 这也是逻辑复用的一种方式
 * <DataProvider render={ data => <h1>Hello { data.target }</h1> }  />
*/

// native
// class MouseTracker extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { x:0, y: 0 };
//   }

//   handleMouserMove = event => this.setState({
//     x: event.clientX,
//     y: event.clientY,
//    })

//    render() {
//      return (
//        <div onMouseMove={ this.handleMouserMove } style={{ border: '1px solid #f9b' }}>
//          <h1>Move mouse!</h1>
//      <p>Mouse current position is : ({this.state.x}, { this.state.y })</p>
//        </div>
//      )
//    }
// }

// children: 是一个渲染的方法,createContext.Consumer用到了类似的形式 <Context.consumer>{ this.props.children(Context.value) }</Context.consumer>
// class MouseTracker extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouserMove = event => this.setState({
//     x: event.clientX,
//     y: event.clientY,
//   })

//   render() {
//     return <div onMouseMove={ this.handleMouserMove } style={{ border: '1px solid #f9b' }}>
//       { this.props.children(this.state) }
//     </div>
//   }
// }

// const element = <MouseTracker>
//   {
//     props => (
//       <>
//           <h1>Move mouse!</h1>
//         <p>Mouse current position is : ({props.x}, { props.y })</p>
//       </>
//     )
//   }
// </MouseTracker>;

// render property
// class MouseTracker extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouserMove = event => this.setState({
//     x: event.clientX,
//     y: event.clientY,
//   })

//   render() {
//     return <div onMouseMove={ this.handleMouserMove } style={{ border: '1px solid #f9b' }}>
//       { this.props.render(this.state) }
//     </div>
//   }
// }

// const element = <MouseTracker render={
//     props => (
//       <>
//           <h1>Move mouse!</h1>
//         <p>Mouse current position is : ({props.x}, { props.y })</p>
//       </>
//     )
// }/>;

// HOC

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}
function withMouse(WrappedComponent) {
    return ( // props向下传递
        props => <MouseTracker render= {mouse => <WrappedComponent {...props} {...mouse} />} />
    )
}
let App = withMouse(props => (
    <>
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({props.x}, {props.y})</p>
    </>
));
ReactDOM.render(<App />, document.getElementById('root'));