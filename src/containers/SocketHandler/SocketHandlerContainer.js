import { connect } from 'react-redux';

import SocketHandler from '../../components/SocketHandler/SocketHandler';
import { chatActions } from '../../actions/socketActions/socketChatActions';

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
  saveMessage: chatActions.saveMessage,
  setReadStatus: chatActions.setReadMessageStatus,
  joinChatUser: chatActions.joinNewUser,
  quitChatUser: chatActions.quitUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketHandler);
