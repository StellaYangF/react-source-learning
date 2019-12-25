function render(node, parent) {
  let { type, props } = node;
  // type: string function class
  let domElement = document.createElement(type);
  for (let propName in  props) {
    if (propName === 'children') {
      if (typeof children === 'string') {
        return domElement.appendChild(document.createTextNode(props[propName]));
      } 
      if (!Array.isArray(props[propName])) {
        render(props[propName], domElement);
      }else {
        props[propName].forEach()
      }
    }
    if (propName === 'className') {
      domElement[propName] = props[propName];
    } else if (propName === 'style') {
      let styleObject = props[propName];
      // let cssText = Object.keys(styleObject).map(attr => {
      //   return `${attr.replace(/(A-Z)/g, function() {
      //     return `-${arguments[1].toLowerCase()}`
      //   })}:${styleObject[attr]}`
      // }).join(';');

      for (let attr in styleObject) {
        domElement[propName][attr] = styleObject[attr];
      }
    } else {
      domElement.setAttribute(propName, props[propName]);
    }
  }
  parent.appendChild(domElement);
}

export default {
  render
}