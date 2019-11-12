/**
 * Created by Korepanov Grigorii on 11.11.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  chatReducer,
  messageReducer,
});
