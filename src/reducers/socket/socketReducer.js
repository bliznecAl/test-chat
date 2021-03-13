import { START_SOCKET_ACTIONS } from '../../actions/socketActions/startSocketActions';
import { INIT_SOCKET_CONNECTION_ACTIONS } from '../../actions/socketActions/initSocketConnectionActions';

const initialState = {
  serverInfo: {
    isProcessing: false,
    data: null,
    error: null,
  },
  socketConnection: {
    isProcessing: false,
    connection: null,
    error: null,
  }
};

const socketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SOCKET_ACTIONS.REQUEST:
      return {
        ...state,
        serverInfo: {
          ...state.serverInfo,
          isProcessing: true,
        },
      };

    case START_SOCKET_ACTIONS.SUCCESS:
      return {
        ...state,
        serverInfo: {
          ...state.serverInfo,
          isProcessing: false,
          data: payload,
        },
      };

    case START_SOCKET_ACTIONS.ERROR:
      return {
        ...state,
        serverInfo: {
          ...state.serverInfo,
          isProcessing: false,
          error: payload,
        },
      };

    case INIT_SOCKET_CONNECTION_ACTIONS.REQUEST:
      return {
        ...state,
        socketConnection: {
          ...state.socketConnection,
          isProcessing: true,
        },
      };

    case INIT_SOCKET_CONNECTION_ACTIONS.SUCCESS:
      return {
        ...state,
        socketConnection: {
          ...state.socketConnection,
          isProcessing: false,
          connection: payload,
        },
      };

    case INIT_SOCKET_CONNECTION_ACTIONS.ERROR:
      return {
        ...state,
        socketConnection: {
          ...state.socketConnection,
          isProcessing: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default socketReducer;
