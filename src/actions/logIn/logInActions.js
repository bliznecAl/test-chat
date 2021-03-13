export const AUTH_ACTIONS = {
  LOGIN_USER: 'Login user chat',
  QUIT_USER: 'Quit user chat'
};


export const authChatActions = {
  logInUser: (payload) => ({ type: AUTH_ACTIONS.LOGIN_USER, payload }),
  quitUser: () => ({ type: AUTH_ACTIONS.QUIT_USER }),
};
