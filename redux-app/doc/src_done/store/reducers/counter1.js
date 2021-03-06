import * as TYPES from '../action-types';
let initialState = { number: 0 };

export default  function (state = initialState, action) {
  switch(action.type) {
    case TYPES.INCREMENT1:
      return { number: state.number + 1 };
    case TYPES.DECREMENT1:
      return { number: state.number ? state.number - 1 : state.number };
    default:
      return state;
  }
}