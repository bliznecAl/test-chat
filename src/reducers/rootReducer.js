import { combineReducers } from 'redux';
import socketReducer from './socket/socketReducer';
import chatReducer from './chat/chatReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  socket: socketReducer,
  chat: chatReducer,
  auth: authReducer
});

export default rootReducer;
