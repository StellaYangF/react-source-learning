import { createStore, applyMiddleWare } from '../redux';
import reducer from './reducers';
import logger from '../redux_logger';
import thunk from '../redux_thunk';
import promise from '../redux_promise';

export default applyMiddleWare(thunk, promise, logger)(createStore)(reducer);