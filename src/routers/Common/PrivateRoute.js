import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Route } from 'react-router-dom';

import SocketHandlerContainer from '../../containers/SocketHandler/SocketHandlerContainer';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

class PrivateRoute extends React.Component {
  // componentDidMount () {
  //   const {
  //     isAuthenticated, isProcessing, checkAuth,
  //     history,
  //   } = this.props;

  //   if (!isAuthenticated && !isProcessing) {
  //     checkAuth();
  //   }
  // }

  render () {
    const { /* isAuthenticated */ isProcessing } = this.props;

    // if (isProcessing) {
    //   return (
    //     <Loader />
    //   );
    // }

    // if (!getAuthData().token) {
    //   return <Redirect to="/" />;
    // }

    return (
      <>
        <Header />
        <SocketHandlerContainer />
        <Route {...this.props} />
        <Footer />
      </>
    );
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
  headerIsShown: PropTypes.bool,
  sidebarIsShown: PropTypes.bool,
};

export default withRouter(PrivateRoute);
