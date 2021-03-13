import { connect } from 'react-redux';

import SocketHandler from '../../components/SocketHandler/SocketHandler';
import { joinChatActions, quitChatActions, sendMessageActions } from '../../actions/socketActions/socketChatActions';

const mapStateToProps = ({
  socket: { socketConnection },
  chat,
  auth
}) => ({
  ...socketConnection,
  ...chat,
  auth
});

const mapDispatchToProps = {
  sendMessage: sendMessageActions.success,
  joinChat: joinChatActions.success,
  quitChat: quitChatActions.success
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketHandler);
