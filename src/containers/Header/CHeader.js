import { connect } from 'react-redux';
import { authChatActions } from '../../actions/logIn/logInActions';
import { chatActions } from '../../actions/socketActions/socketChatActions';
import Header from '../../components/common/Header';

const mapStateToProps = ({
  socket: { socketConnection: { connection } },
  auth
}) => ({
  connection,
  auth
});

const mapDispatchToProps = {
  logOff: authChatActions.quitUser,
  exiChatUser: chatActions.quitUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
