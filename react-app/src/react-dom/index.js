function render(node, parent) {
  if (typeof node !== 'object' && typeof node !== 'function') {
    return parent.appendChild(document.createTextNode(node));
  }
  let { type, props } = node;
  // type: string function class
  if (type.isReactComponent) { // class
    let newElement = new type(props).render(); // 可能返回的是function class组件
    type = newElement.type;
    props = newElement.props;
    if (typeof type === 'function') return render(newElement, parent);
  } else if (typeof type === 'function') { // function
    let newElement = type(props);
    type = newElement.type;
    props = newElement.props;
    if (typeof type === 'function') return render(newElement, parent);
  }
  let domElement = document.createElement(type); // string
  for (let propName in  props) {
    if (propName === 'children') {
      let { children } = props;
      if (!Array.isArray(children)) {
        render(children, domElement);
      }else {
        children.forEach(child => render(child, domElement));
      }
    } else if (propName === 'className') {
      domElement[propName] = props[propName];
    } else if (propName === 'style') {
      let styleObject = props[propName];
      let cssText = Object.keys(styleObject).map(attr => {
        return `${attr.replace(/([A-Z])/g, function() {
          return `-${arguments[1].toLowerCase()}`
        })}: ${styleObject[attr]}`
      }).join('; ');
      console.log(cssText);
      domElement.style.cssText = cssText;
      // for (let attr in styleObject) {
      //   domElement[propName][attr] = styleObject[attr];
      // }
    } else {
      domElement.setAttribute(propName, props[propName]);
    }
  }
  parent.appendChild(domElement);
}

export default {
  render
}