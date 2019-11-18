/**
 * Created by Korepanov Grigorii on 11.11.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

export default history => combineReducers({
  router: connectRouter(history),
  chatReducer,
  messageReducer,
});
