import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

const SEND_MESSAGE_ACTION = 'SEND_MESSAGE';
const JOIN_USER_CHAT_ACTION = 'JOIN_USER_CHAT';
const QUIT_USER_CHAT_ACTION = 'QUIT_USER_CHAT';

export const SEND_MESSAGE_ACTIONS = getFetchActionNames(SEND_MESSAGE_ACTION);
export const JOIN_USER_ACTIONS = getFetchActionNames(JOIN_USER_CHAT_ACTION);
export const QUIT_USER_ACTIONS = getFetchActionNames(QUIT_USER_CHAT_ACTION);

export const sendMessageActions = {
  send: (payload) => ({ type: SEND_MESSAGE_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: SEND_MESSAGE_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: SEND_MESSAGE_ACTIONS.ERROR, payload }),
};

export const joinChatActions = {
  join: (payload) => ({ type: JOIN_USER_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: JOIN_USER_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: JOIN_USER_ACTIONS.ERROR, payload }),
};

export const quitChatActions = {
  quit: (payload) => ({ type: QUIT_USER_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: QUIT_USER_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: QUIT_USER_ACTIONS.ERROR, payload }),
};
