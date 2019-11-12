import update from 'react-addons-update';
import { SEND_MESSAGE } from '../Actions/messageActions';
import { ADD_CHAT } from '../Actions/chatActions';

const initialStore = {
  chats: [
    { title: 'Чат 1', messageList: [1] },
  ],
};

export default (store = initialStore, action) => {
  switch (action.type) {
  case SEND_MESSAGE: {
    return update(store, {
      chats: {
        $merge: {
          [action.chatId]: {
            title: store.chats[action.chatId].title,
            messageList: [...store.chats[action.chatId].messageList, action.messageId],
          },
        },
      },
    });
  }
  case ADD_CHAT: {
    const chatId = Object.keys(store.chats).length + 1;
    return update(store, {
      chats: {
        $merge: {
          [chatId]: {
            title: action.title, messageList: [],
          },
        },
      },
    });
  }
  default:
    return store;
  }
};
