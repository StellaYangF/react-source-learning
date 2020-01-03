export default function combineReducers (reducers) {
  return function combination(state, action) {
    let nextState = {};

    for (let key in  reducers) {
      let reducer = reducers[key];
      let previousStateForKey = state[key]; // { number: 0 }
      let nextStateForKey = reducer(previousStateForKey, action); // { number: state.number + 1 }
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}
