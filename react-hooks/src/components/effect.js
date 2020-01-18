import React, { useState, useEffect } from 'react';
function Counter1(props) {
  const [ number, setNumber ] = useState(0);

  useEffect(() => {
    console.log('Start a new timer.');
    let $timer = setInterval(() => setNumber(number => number + 1), 1000);
    return () => clearInterval($timer) && ($timer = null);
  }, [])

  return (
  <p>{ number }</p>
  )
}

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
      document.title = `你点击了${this.state.number}次`;
  }

  componentDidUpdate() {
      document.title = `你点击了${this.state.number}次`;
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => this.setState({ number: this.state.number + 1 })}>
          +
        </button>
      </div>
    );
  }
}

function Counter3(props) {
  const [ number, setNumber ] = useState(0);

  useEffect(() => {
    document.title = `你点击了${number}次`;
  })

    return (
      <div>
        <p>{number}</p>
        <button onClick={() => setNumber(number => number + 1)}>
          +
        </button>
      </div>
    );
}

// clear side-effect
function Counter4(props) {
  let [number, setNumber] = useState(0);
  useEffect(() => {
    console.log('Start a new timer.');
    document.title = 'clear side-effect';
    const $timer = setInterval(() => setNumber(number => number + 1), 1000);
    return () => {
      console.log('销毁老的定时器');
      clearInterval($timer);
    }
  }, [])

  return <p>{ number }</p>
}

function App() {
  let [ visible, setVisible ] = useState(true);
  return (
    <div>
      { visible && <Counter4/> }
      <button onClick={ () => setVisible(false) }>stop</button>
      <button onClick={ () => setVisible(true) }>Start</button>
    </div>
  )
}



export default App;