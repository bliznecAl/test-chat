import { connect } from 'react-redux';
import { authChatActions } from '../../actions/logIn/logInActions';
import Header from '../../components/common/Header';
import {chatActions} from '../../actions/socketActions/socketChatActions';

const mapStateToProps = ({
  socket: { socketConnection: { connection } },
  auth
}) => ({
  connection,
  auth
});

const mapDispatchToProps = {
  logOff: authChatActions.quitUser,
  quitChat: chatActions.quitChat
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
