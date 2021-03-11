import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

const STOP_SOCKET_ACTION = 'STOP_SOCKET_ACTION';

export const STOP_SOCKET_ACTIONS = getFetchActionNames(STOP_SOCKET_ACTION);

export const stopSocketActions = {
  request: (payload) => ({ type: STOP_SOCKET_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: STOP_SOCKET_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: STOP_SOCKET_ACTIONS.ERROR, payload }),
};
