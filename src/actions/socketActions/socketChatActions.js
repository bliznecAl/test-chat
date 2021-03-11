import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

const START_SOCKET_ACTION = 'START_SOCKET';

export const SOCKET_SEND_MESSAGE_ACTIONS = getFetchActionNames(START_SOCKET_ACTION);

export const socketSendMessageActions = {
  send: (payload) => ({ type: SOCKET_SEND_MESSAGE_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: SOCKET_SEND_MESSAGE_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: SOCKET_SEND_MESSAGE_ACTIONS.ERROR, payload }),
};
