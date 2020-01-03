import { createStore } from '../redux';
import reducers from './reducers';
const store = createStore(reducers);
export default store;

/**
 * combineReducers 是解决一个矛盾，
 * redux规则整个应用只能有一个仓库，仓库里只能一个状态
 * 组件非常多，每个组件都有可能有自己的状态和派发动动作
 * 每个组件都配有自己的状态和reducer和动作
 * 最后统一合并成一个reducer
 */