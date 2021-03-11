import { combineReducers } from 'redux';
import socketReducer from './socket/socketReducer';

const rootReducer = combineReducers({
  socket: socketReducer
});

export default rootReducer;
