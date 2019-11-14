/**
 * Created by Korepanov Grigorii on 11.11.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = title => ({
  type: ADD_CHAT,
  title,
});
