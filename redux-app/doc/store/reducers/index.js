import { combineReducers } from '../../redux';
import counter1 from './counter1';
import counter2 from './counter2';
/**
 * 要拿 到二个子reducer,然后合并成一个reducer
 */
let reducers = {
    counter1,
    counter2
}

let combinedReducer = combineReducers(reducers);
export default combinedReducer;