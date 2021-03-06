import * as types from '../action-types';
import { AnyAction } from 'redux';
export interface CounterState {
  number: number
}
let initialState: CounterState = { number: 0 };
export default function (state: CounterState = initialState, action:AnyAction):CounterState {
  switch(action.type) {
    case types.ADD:
      return { number: state.number + 1 }
    default:
      return state;
  }
}