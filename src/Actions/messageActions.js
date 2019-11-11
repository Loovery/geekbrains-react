/**
 * Created by Korepanov Grigorii on 11.11.2019
 * grigoriikorepanov@gmail.com
 * t.me/loovery
 */

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId) => ({
  type: SEND_MESSAGE,
  messageId,
  text,
  sender,
  chatId,
});
