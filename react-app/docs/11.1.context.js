import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext();

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
              <button className='btn btn-danger ml_10' onClick={() => value.changeColor("#d9534f")}>Pink</button>
            <button className='btn btn-info ml_10' onClick={() => value.changeColor("#46b8da")}>Green</button>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = { color: '#d9534f' };
  }

  changeColor = color =>this.setState({ color });

  render () {
    let contextVal = { changeColor: this.changeColor, color: this.state.color };
    return (
      <ThemeContext.Provider value={ contextVal }>
        <div style={ { width: 300, padding: 5, margin: '50px auto', border: `4px solid ${this.state.color}` } }>
          <Header />
          <Main />
         
        </div>
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);