function render (node, parent) {
  if (typeof node === 'string') {
    return parent.appendChild(document.createTextNode(node));
  }
  let { type, props } = node;
  // 1. type: string function class
  // 2. function component
  if (type.isReactComponent){
    // 3. type: class
    const newElement = new type(props).render();
    type = newElement.type;
    props = newElement.props;
  }else if (typeof type === 'function' ) {
    // type: function Button(props) { return <button className={props.className}>{props.content}</button> }
    // React.createElement('button', config, children)
    const newElement = type(props);  
    type = newElement.type;
    props = newElement.props;
  } 
  let domElement = document.createElement(type);
  for (let propName in props) {
    if (propName === 'children') {
      let { children } = props;
      if (!Array.isArray(children)) {
        render(children, domElement);
      }else {
        children.forEach(child => render(child, domElement));
      }
    } else if (propName === 'className') {
      domElement.className = props.className;
    } else if(propName === 'style') {
      let styleObject = props.style;
      // for (let attr in styleObject) {
      //   domElement.style[attr] = styleObject[attr];
      // }
      
      // two
      let cssText = Object.keys(styleObject).map(attr => {
        return `${attr.replace(/(A-A)/g, function() {
          return '-' + arguments[1].toLowerCase()
        })}:${styleObject[attr]}`;
      }).join(';');
      domElement.style.cssText = cssText;
    } else {
      domElement.setAttribute(propName, props[propName]);
    }
  }
  parent.appendChild(domElement);
}
export default {
  render,
}