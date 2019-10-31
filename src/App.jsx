/**
 * Created by Korepanov Grigorii on 24.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React, { Component } from 'react';
import './css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}
