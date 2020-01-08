import * as types from '../action-types';
import { push } from 'connected-react-router';
export default {
  increment() {
    return { type: types.ADD }
  },
  go(path: string) {
    return push(path);
  }
}