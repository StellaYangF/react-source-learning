import * as TYPES from '../action-types';
export default {
  increment1 () { 
    return { type: TYPES.INCREMENT1 }
  },
  decrement1 () {
    return { type: TYPES.DECREMENT1 }
  }
}