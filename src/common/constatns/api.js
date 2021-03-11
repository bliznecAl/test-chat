const MAIN_API_URL = 'ws://easygraphs.io:9093';

export const API_CONFIG = {
  URL: `${MAIN_API_URL}/api.php`,
  MAIN: MAIN_API_URL,
  LINK: `http://${MAIN_API_URL}`,
};

export const DEFAULT_TOKEN = 'bxtmhzhbuz48sgwosgwo4sws0wc4s48';

export const API_METHODS_URLS = {
  GET_PRESENTATIONS_LIST: '/add_appointment',
  GET_PRESENTATION_URL: (id) => `/fetch_presentation/${id}`,
  LOGIN: '/auth/login',
  LOGIN_HCP_PIN: '/auth_appointment',
  POST_APPOINTMENT: '/update_appointment',
  GET_APPOINTMENT_URL: (id) => `/fetch_edit_appointment/${id}`,
  GET_APPOINTMENT_SHOW_URL: (id) => `/fetch_show_appointment/${id}`,
  GET_APPOINTMENT_HCP_SHOW_URL: (id) => `/lobby_appointment/${id}`,
  GET_APPOINTMENTS: '/list_appointment',
  GET_WEBSOCKET_RUN_URL: (id) => `/websocket_run/${id}`,
  GET_WEBSOCKET_STOP_URL: (id) => `/websocket_stop/${id}`,
  WEBSOCKET_ROUTE: '/socket/presentation',
  GET_SEND_INVITATIONS_URL: (id) => `/attendees_notification/${id}`,
};
