import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

export const CHAT_ACTION = {
  SAVE_NEW_MESSAGE: 'save new message',
  READ_MESSAGE: 'read new message chat',
  SET_READ_MESSAGE_STATUS: 'set message read status',

  JOIN_NEW_USER: 'new user join chat',
  QUIT_USER: 'user left chat'
};

export const chatActions = {
  saveMessage: (payload) => ({ type: CHAT_ACTION.SAVE_NEW_MESSAGE, payload }),
  sendReadMessageStatus: (payload) => ({ type: CHAT_ACTION.READ_MESSAGE, payload }),
  setReadMessageStatus: (payload) => ({ type: CHAT_ACTION.SET_READ_MESSAGE_STATUS, payload }),

  joinNewUser: (payload) => ({ type: CHAT_ACTION.JOIN_NEW_USER, payload }),
  quitUser: (payload) => ({ type: CHAT_ACTION.QUIT_USER, payload }),
};
