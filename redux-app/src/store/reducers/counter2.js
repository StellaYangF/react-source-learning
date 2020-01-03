import * as TYPES from '../action-types';
let initialState = { number: 0 };

export default  function (state = initialState, action) {
  switch(action.type) {
    case TYPES.INCREMENT2:
      return { number: state.number + 2 };
    case TYPES.DECREMENT2:
      return { number: state.number - 2 };
    default:
      return state;
  }
}