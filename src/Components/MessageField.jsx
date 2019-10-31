/**
 * Created by Korepanov Grigorii on 28.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Message from './Message';
import { uuid, botPhrases } from '../utils';

export default class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: {
        1: { title: 'Чат 1', messageList: [1] },
        2: { title: 'Чат 2', messageList: [2] },
        3: { title: 'Чат 3', messageList: [] },
      },
      messages: [
        {
          id: uuid(),
          text: 'Привет',
          sender: 'not-me',
        },
        {
          id: uuid(),
          text: 'Как дела?',
          sender: 'me',
        },
      ],
      textFieldValue: '',
      overloadBot: {
        timer: null,
        tick: 0,
        maxTick: 5,
        text: 'Воу воу воу. Остановись! Хватит флудить',
      },
    };

    this.chatWindow = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line react/destructuring-assignment
    if (prevState.messages.length < this.state.messages.length) {
      const { messages, overloadBot } = this.state;
      const lastSender = messages[messages.length - 1].sender;
      const preLastSender = messages[messages.length - 2].sender;
      if (overloadBot.tick === overloadBot.maxTick) {
        overloadBot.tick = 0;
        this.sendMessage(overloadBot.text, 'bot');
      } else if (lastSender === 'me' && preLastSender === 'me') {
        overloadBot.tick += 1;
        this.botSendMessage();
      } else if (lastSender === 'me') {
        this.botSendMessage();
      }
    }
  }

  botSendMessage() {
    const { overloadBot } = this.state;
    clearTimeout(overloadBot.timer);
    overloadBot.timer = setTimeout(() => {
      overloadBot.tick = 0;
      this.sendMessage(botPhrases(), 'bot');
    }, 1000);
  }

  sendMessage(text, sender) {
    if (text.length > 0) {
      const { messages, chats } = this.state;
      const { chatId } = this.props;

      const messageId = Object.keys(messages).length + 1;
      this.setState({
        messages: { ...messages, [messageId]: { id: uuid(), text, sender } },
        chats: { ...chats, [chatId]: { ...chats[chatId], messageList: [...chats[chatId].messageList, messageId] } },
      });
      this.setState({ textFieldValue: '' });

      const chatWindow = this.chatWindow.current;
      setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    }
  }

  handleChange(event) {
    this.setState({ textFieldValue: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      const { textFieldValue } = this.state;
      this.sendMessage(textFieldValue, 'me');
    }
  }

  render() {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[chatId].messageList.map(messageId => {
      return <Message key={messages[messageId].message.id} message={messages[messageId].message} />
    });

    return (
      <>
        <div className="message-field" ref={this.chatWindow}>{ messageElements }</div>
        <div className="text-field">
          <TextField
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            fullWidth
            margin="normal"
            type="text"
            autoFocus
            placeholder="Write a message..."
            value={this.state.textFieldValue}
          />
          <button onClick={() => this.sendMessage(this.state.textFieldValue, 'me')} type="button">Отправить</button>
        </div>
      </>
    );
  }
}

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
};
