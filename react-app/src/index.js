import React from 'react';
import ReactDOM from 'react-dom';


// principle
function createContext() {
  class Provider extends React.Component {
    static value;   // { changeColor: this.changeColor, color: this.state.color };
    constructor(props) {
      super(props);
      Provider.value = props.value;
      this.state = { value: props.value }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      Provider.value = nextProps.value;
      return { value: nextProps.value };
    }
    render() {
      return this.props.children
    }
  }
  
  class Consumer extends React.Component {
    render() {
      return this.props.children(Provider.value);
    }
  }
  
  return {
    Provider,
    Consumer
  }
}

const ThemeContext = createContext();

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = { color: '#d9534f', count: 0 };
  }

  changeColor = color => {
    this.setState({ color });
  };

  add = () => this.setState(state => ({ count: state.count + 2 }));

  minus = () => this.setState(state => (state.count ? { count: state.count -1 } : {count: state.count }));

  render () {
    let contextVal = { changeColor: this.changeColor, color: this.state.color, add: this.add, minus: this.minus };
    return (
      <ThemeContext.Provider value={ contextVal }>
        <div style={ { width: 300, padding: 5, margin: '50px auto', border: `4px solid ${this.state.color}` } }>
          <p> Count: { this.state.count }</p>
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (value) => (
            <div style={{ border: `4px solid ${value.color}`, padding: 10 }}>
              Header
              <Title/>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
class Title extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {
          value => (
            <div style={{ border: `4px solid ${value.color}`, padding: 10 }}>Title</div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
class Main extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {
          value => (
            <div style={{ border: `4px solid ${value.color}`, padding: 10, marginTop: 10 }}>
              Main
              <Content />
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
class Content extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {
          value => (
            <div style={{ border: `4px solid ${value.color}`, padding: 10 }}>
              Content
              <br/>
              <button className='btn btn-danger ml_10' onClick={() => value.changeColor("#d9534f")}>Pink</button>
              <button className='btn btn-info ml_10' onClick={() => value.changeColor("#46b8da")}>Green</button>
              <br/>
              <button className='btn btn-secondary ml_10' onClick={ value.minus }>-</button>
              <button className='btn btn-secondary ml_10' onClick={ value.add }>+</button>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
