/**
 * Created by Korepanov Grigorii on 11.11.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

import { createStore } from 'redux';
import initReducers from '../Reducers';

export default () => {
  const innitialStore = {};

  return createStore(initReducers, innitialStore);
};
