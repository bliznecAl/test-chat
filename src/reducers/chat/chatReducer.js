import { CHAT_ACTION } from '../../actions/socketActions/socketChatActions';

const initialState = {
  allChatMessages: {},
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

    default:
      return state;
  }
};

export default chatReducer;
