import { createStore, applyMiddleWare } from '../redux';
import reducer from './reducers';

// const store = createStore(reducer);

/**
 *  middleware 中间件：
 *    就是一个函数，对store.dispatch方法进行改造，在发出Action和执行RedUC而两步之间，添加其他功能
 * 
 *  实现redux中间件 - AOP设计模式
*/ 
// let dispatch = store.dispatch;
// store.dispatch = action => {
//   console.log(store.getState().counter1.number);
//   dispatch(action);
//   console.log(store.getState().counter1.number);
// }
// export default store;

let logger = store => dispatch => action => {
  console.log(store.getState());
  dispatch(action);
  console.log(store.getState());
};
export default applyMiddleWare(logger)(createStore)(reducer);