export default function createStore(reducer, preloadedState = {}, enhancer) {
  let currentState = preloadedState;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
      currentState = reducer(currentState, action);
    let listeners = currentListeners;
    listeners.forEach(listener => listener());
    return action;
  }
  dispatch('@@REDUX_INIT');

  function subscribe(listener) {
    currentListeners.push(listener);
    return function unsubscribe() {
      currentListeners.filter(item => item !== listener);
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}