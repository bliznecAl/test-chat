import { CHAT_ACTION } from '../../actions/socketActions/socketChatActions';

const initialState = {
  allChatMessages: {},
  onlineUserList: [],
  error: null,
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHAT_ACTION.SAVE_NEW_MESSAGE:
      return {
        ...state,
        allChatMessages: { ...state.allChatMessages, [payload.messageId]: payload }
      };

    case CHAT_ACTION.SET_READ_MESSAGE_STATUS:
      return {
        ...state,
        allChatMessages: { ...state.allChatMessages, [payload.messageId]: payload }
      };

    case CHAT_ACTION.QUIT_CHAT:
      return {
        ...state,
        allChatMessages: {},
        onlineUserList: []
      };

    case CHAT_ACTION.JOIN_NEW_USER:
      return {
        ...state,
        allChatMessages: { ...state.allChatMessages, [`${payload.userId} join`]: payload },
        onlineUserList: [...state.onlineUserList, payload]
      };

    case CHAT_ACTION.QUIT_USER:
      return {
        ...state,
        allChatMessages: { ...state.allChatMessages, [`${payload.userId} quit`]: payload },
        // onlineUserList: [state.onlineUserList.filter(user => user.userId !== payload.userId)]
      };

    default:
      return state;
  }
};

export default chatReducer;
