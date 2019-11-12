/**
 * Created by Korepanov Grigorii on 24.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import './css/styles.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './Containers/Router';
import { store } from './utils';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}
