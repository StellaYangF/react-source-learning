const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;


function createElement(type, config, children) {
  let props = {};
  for (let key in config) {
    props[key] = config[key];
  }
  let childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  }else if (childrenLength > 1) {
    props.children = [...arguments].slice(2);
  }
  return {
    type, // string function class
    props,
    $$type: REACT_ELEMENT_TYPE
  }
}

class Component {
  constructor(props) {
    this.props = props;
  }
  static isReactComponent = true
}

export default {
  createElement,
  Component
}