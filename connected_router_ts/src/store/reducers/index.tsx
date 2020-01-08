import { ReducersMapObject, combineReducers, AnyAction, Reducer } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import counter, { CounterState } from './counter';
import history from '../../history';

interface Reducers {
  router: RouterState,
  counter: CounterState,
}
let reducers: ReducersMapObject<Reducers, any> = {
  router: connectRouter(history),
  counter,
}
export type RootState = {
  [ key in keyof typeof reducers ]: ReturnType<typeof reducers[key]>
}
let rootReducer: Reducer<RootState, AnyAction> = combineReducers<RootState, AnyAction>(reducers);
export default rootReducer;