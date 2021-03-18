import { connect } from 'react-redux';

import ChatContainer from '../components/Chat/ChatContainer';
import { initSocketConnectionActions } from '../actions/socketActions/initSocketConnectionActions';
import { authChatActions } from '../actions/logIn/logInActions';
import { chatActions } from '../actions/socketActions/socketChatActions';

const mapStateToProps = ({
  socket: { socketConnection: { connection } },
  chat,
  history,
  auth
}) => ({
  connection,
  chat,
  history,
  auth
});

const mapDispatchToProps = {
  startSocket: initSocketConnectionActions.request,
  logIn: authChatActions.logInUser,
  logOff: authChatActions.quitUser,
  sendReadStatus: chatActions.sendReadMessageStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
