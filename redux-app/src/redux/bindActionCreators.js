export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  
  let boundActionCreators = {};

  for (let key in actionCreators) {
    let actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function bindActionCreator(actionCreator, dispatch) {
  return  (...args) => dispatch(actionCreator(...args));
}