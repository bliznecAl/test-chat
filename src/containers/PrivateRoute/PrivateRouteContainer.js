import { connect } from 'react-redux';
import PrivateRoute from '../../routers/Common/PrivateRoute';

const mapStateToProps = ({ auth: { user, isProcessing } }) => ({
  isAuthenticated: !!user,
  isProcessing,
});

const mapDispatchToProps = {
  checkAuth: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
