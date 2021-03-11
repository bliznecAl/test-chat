import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

const INIT_SOCKET_CONNECTION_ACTION = 'INIT_SOCKET_CONNECTION_ACTION';

export const INIT_SOCKET_CONNECTION_ACTIONS = getFetchActionNames(INIT_SOCKET_CONNECTION_ACTION);

export const initSocketConnectionActions = {
  request: (payload) => ({ type: INIT_SOCKET_CONNECTION_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: INIT_SOCKET_CONNECTION_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: INIT_SOCKET_CONNECTION_ACTIONS.ERROR, payload }),
};
