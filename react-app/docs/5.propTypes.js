import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

/**
 * 属性校验
 * 1. why?
 * 
 */
class Person extends React.Component {
  static defaultProps = {
    gender: 'male'
  }
  static propTypes = {
    // age: propTypes.number.isRequired,
    gender: propTypes.oneOf(['male', 'female']).isRequired,
    hobby: propTypes.arrayOf(propTypes.string).isRequired,
    position: propTypes.shape({
      x: propTypes.number,
      y: propTypes.number,
    }),
    age: function(props, propName, componentName) {
      if (props.age < 18) throw new Error('你還未成年');
    }
  }
  render() {
    return (
      <ul style={{ fontSize: '30px', listStyle: 'none' }}>
        <li>age: {this.props.age}</li>
        <li>gender: {this.props.gender}</li>
        <li>hobby: {this.props.hobby}</li>
    <li>position: {this.props.position.x} {this.props.position.y}</li>
      </ul>
    )
  }
}

let personProps = {
  age: -10,
  // gender: 'femaless',
  hobby: ['dancing', 'singing'],
  position: { x: 10, y: 20 },
  friends: [{ name: 'Tom', age: 10 }, { name: 'Jerry', age: -10 }]
}

ReactDOM.render(<Person {...personProps} />, document.getElementById('root'));