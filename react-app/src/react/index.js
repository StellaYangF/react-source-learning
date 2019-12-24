import { STRING, FUNCTION } from './constants.js'

function createElement(type, config, children) {
  if (typeof type === STRING) {
    let node = document.createElement(type);
    let props = {};
    Object.keys(config).forEach(prop => {
      if (prop === 'style') {

      }else if (prop === 'className') {

      }else {
        node.setAttribute()
      }
    })
  }
}

export default {
  createElement,
}