import getFetchActionNames from '../../common/actionsBuilder/fetchActionsBuilder';

const START_SOCKET_ACTION = 'START_SOCKET';

export const START_SOCKET_ACTIONS = getFetchActionNames(START_SOCKET_ACTION);

export const startSocketActions = {
  request: (payload) => ({ type: START_SOCKET_ACTIONS.REQUEST, payload }),
  success: (payload) => ({ type: START_SOCKET_ACTIONS.SUCCESS, payload }),
  error: (payload) => ({ type: START_SOCKET_ACTIONS.ERROR, payload }),
};
