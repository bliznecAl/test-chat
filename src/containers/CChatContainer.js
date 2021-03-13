import { connect } from 'react-redux';

import ChatContainer from '../components/Chat/ChatContainer';
import { initSocketConnectionActions } from '../actions/socketActions/initSocketConnectionActions';
import {authChatActions} from "../actions/logIn/logInActions";

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
  logIn: authChatActions.logInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
