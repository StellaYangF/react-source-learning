export default function createStore(reducer, preloadedState, enhancer) {
  let _ref2;

  if ( (typeof preloadedState === 'function' && typeof enhancer === 'function') || (typeof enhancer === 'function' && typeof arguments[3] === 'function')) {
    throw new Error('It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    [ enhancer, preloadedState] = [ preloadedState, undefined ]; 
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];
  let nextListeners = [];
  let isDispatching = false;

  function getState() {
    if (isDispatching) throw new Error('You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store. ')
    return currentState;
  }

  function dispatch(action) {
    try {
      isDispatching = true;
      currentState = reducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    let listeners = currentListeners = nextListeners;
    listeners.forEach(listener => listener());
    return action;
  }
  dispatch('@@REDUX_INIT');

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }
    let isSubscribed = true;
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) return;
      if (isDispatching) throw new Error('You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      isSubscribed = false;
      nextListeners.filter(item => item !== listener);
      currentListeners = null;
    }
  }

  return _ref2 = {
    getState,
    dispatch,
    subscribe,
  }
}