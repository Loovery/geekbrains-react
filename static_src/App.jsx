/**
 * Created by Korepanov Grigorii on 23.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React, { Component } from 'react';
import './css/styles.css';
import MessageField from './Components/MessageField';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MessageField />;
  }
}
