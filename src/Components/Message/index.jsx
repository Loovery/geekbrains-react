/**
 * Created by Korepanov Grigorii on 12.11.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, sender } = this.props;
    const classname = `message ${sender === 'me' ? 'message-me' : ''}`;
    return (
      <div className={classname}>
        <div className="message__author">{sender}</div>
        <div>{text}</div>
        <div className="message__time">{this.time}</div>
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};
