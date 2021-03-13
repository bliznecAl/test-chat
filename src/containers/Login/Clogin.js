import { connect } from 'react-redux';
import { authChatActions } from '../../actions/logIn/logInActions';
import Login from '../../components/Login/login';

const mapStateToProps = ({
  auth
}) => ({
  auth
});

const mapDispatchToProps = {
  logIn: authChatActions.logInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
