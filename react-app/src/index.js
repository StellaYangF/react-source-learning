import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
  state = { number: 0, name: 'stella' };
  add = () => {
    this.setState(prevState => ({ number: prevState.number + 1 }), () => console.log(this.state));
    this.setState(prevState => ({ number: prevState.number + 2 }), () => console.log(this.state));
  }
  render() {
    return <>
      <h4>{ this.state.number }</h4>
      <button className='btn btn-info' onClick={this.add}>+</button>
    </>
  }
}

ReactDOM.render(<Button />, document.getElementById('root'));