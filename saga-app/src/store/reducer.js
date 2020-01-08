import * as types from './action-types';

let initialState = { number: 0 };
export default function(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return { number: state.number + 1 };
    case types.INCREMENT_ASYNC: 
      return { number: state.number + 2 };
    default:
        return state;
  }
}