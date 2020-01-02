export default function (actionCreators, dispatch) {
  let boundActionCreators = {};
  for (let key in actionCreators) {//add function add(){return {type:'ADD'}}
      boundActionCreators[key] = function (...args) {
          //其实dispatch方法会返回派发的action
          return dispatch(actionCreators[key](...args));
      }
  }
  return boundActionCreators;
}