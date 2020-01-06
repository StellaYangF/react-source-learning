import compose from './compose';
export default function applyMiddleware(...middlewares) {
  debugger;
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = () => {
      throw new Error('不允许派发正在构建中的中间件!');
    }
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    }
  }
}
