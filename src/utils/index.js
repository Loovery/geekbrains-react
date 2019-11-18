/**
 * Created by Korepanov Grigorii on 28.10.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

import botPhrases from './botPhrases';
import timeIsNow from './timeIsNow';
import initStore, { history } from './store';

const { store, persistor } = initStore();

export {
  botPhrases,
  timeIsNow,
  store,
  persistor,
  history,
};
