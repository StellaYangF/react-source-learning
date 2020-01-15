import { combineReducers } from '../../redux';
import counter from './counter';
import counter1 from './counter1';
import counter2 from './counter2';

let reducers = {
  counter,
  counter1,
  counter2,
}
export default combineReducers(reducers);

// export default counter;