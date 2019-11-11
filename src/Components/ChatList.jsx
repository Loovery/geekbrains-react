/**
 * Created by Korepanov Grigorii on 28.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange.bind(this);
    this.handleKeyUp.bind(this);
    this.handleAddChat.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  }

  handleAddChat() {
    if (this.state.input.length > 0) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    const { chats } = this.props;
    return (
      <List dense className="chatList">
        { chats.map((chat, index) => {
          const labelId = `list-secondary-label-${chat.title + index}`;
          return (
            <Link key={chat.title} to={`/chat/${index}/`} className="listItemChatLink">
              <ListItem button className="listItemChat">
                <ListItemText id={labelId} primary={chat.title} />
              </ListItem>
            </Link>
          );
        }) }
        <ListItem
          className="add-new-chat"
          key="Add new chat"
          onClick={this.handleAddChat.bind(this)}
          style={{ height: '60px' }}
          children={(
            <TextField
              key="textField"
              fullWidth
              name="input"
              placeholder="Добавить новый чат"
              onChange={this.handleChange.bind(this)}
              value={this.state.input}
              onKeyUp={this.handleKeyUp.bind(this)}
            />
          )}
        />
      </List>
    );
  }
}

ChatList.propTypes = {
  chats: PropTypes.array,
  // eslint-disable-next-line react/require-default-props,react/no-unused-prop-types
  addChat: PropTypes.func,
};

ChatList.defaultTypes = {
  chats: [],
};
