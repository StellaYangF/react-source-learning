// 创建action的函数 称作 actionCreator
import * as TYPES from './action-types'

export default {
  add() {
    // return store.dispatch({ type: TYPES.ADD });
    return { type: TYPES.ADD };
  },
  minus() {
    return { type: TYPES.MINUS }
  }
}