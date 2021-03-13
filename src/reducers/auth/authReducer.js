import { AUTH_ACTIONS } from '../../actions/logIn/logInActions';

const initialState = {
  userData: {}
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.LOGIN_USER:
      return {
        ...state,
        userData: { ...payload }
      };

    case AUTH_ACTIONS.QUIT_USER:
      return {
        ...state,
        userData: {}
      };

    default:
      return state;
  }
};

export default authReducer;
