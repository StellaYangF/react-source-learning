import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from '../connected-react-router';
import history from '../history';
import reducers from './reducers';

const store = applyMiddleware(routerMiddleware(history))(createStore)(reducers);
export default store;