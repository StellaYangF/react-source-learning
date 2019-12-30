import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * Lifecycles: 只有类组件才有生命周期
 * New: 
 * 组件的生命周期
 *  创建时 constructor                render                    componentDidMount
 *  更新时 getDerivedStateFromProps   shouldComponentUpdate     render              getSnapShotBeforeUpdate componentDidUpdate
 *  卸载时 componentWillUnmount
 *    constructor
 *    getDerivedStateFromProps
 *    shouldComponentUpdate
 *    render
 *    getSnapShotBeforeUpdate
 *    componentDidMount
 *    componentDidUpdate
 *    componentWillUnmount
 *    
*/

class Counter extends React.Component {
  static defaultProps = { name: 'stella' };
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log('1.1.parent constructor');
  }
  handleClick = () => {
    this.setState({number: this.state.number + 1 });
  }

  render() {
    console.log('2.1.render');
    return <>
      <p>{ this.state.number }</p>
      <ChildCounter number={this.state.number} />
      <button onClick={this.handleClick}>+</button>
    </>
  }

  componentDidMount() {
    console.log('5.parent.didComponent');
  }
}

class ChildCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log('1.2.child constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { number } = nextProps;
    console.log('3.getDerivedStateFromProps -- child', number);
    if (number % 2 === 0)  {
      return { number: number * 2 + prevState.number};
    }
    else {
      return { number: number * 3 };
    }
  }

  shouldComponentUpdate() {
    console.log('4.shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate() {
    return '-----';
  }

  componentDidUpdate(param) {
    console.log(param);
  }

  componentDidMount() {
    console.log('6.parent.didComponent');
  }

  render() {
    console.log('2.2.child-render', this.state);
    return <p>
      Child number: { this.state.number }
    </p>
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));