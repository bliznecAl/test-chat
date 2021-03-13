import { SEND_MESSAGE_ACTIONS, sendMessageActions } from '../../actions/socketActions/socketChatActions';

const initialState = {
  allChatMessage: [],
  error: null,
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE_ACTIONS.SUCCESS:
      return {
        ...state,
        allChatMessage: payload
      };

    default:
      return state;
  }
};

export default chatReducer;
