// import React from 'react';
// import PropTypes from 'prop-types';
// import { withRouter, Redirect, Route } from 'react-router-dom';
//
// import Loader from '../../components/Common/Loader/Loader';
// import ROUTES from '../../common/constatns/routes';
// import Layout from '../../containers/Common/Layout/LayoutContainer';
// import { getAuthData } from '../../common/localStorage/localStorage';
// import SocketHandlerContainer from '../../containers/SocketHandler/SocketHandlerContainer';
//
// class PrivateRoute extends React.Component {
//   // componentDidMount () {
//   //   const {
//   //     isAuthenticated, isProcessing, checkAuth,
//   //     history,
//   //   } = this.props;
//
//   //   if (!isAuthenticated && !isProcessing) {
//   //     checkAuth();
//   //   }
//   // }
//
//   render () {
//     const { /* isAuthenticated */ isProcessing } = this.props;
//
//     if (isProcessing) {
//       return (
//         <Loader />
//       );
//     }
//
//     if (!getAuthData().token) {
//       return <Redirect to={ROUTES.LOGIN_SALES} />;
//     }
//
//     return (
//       <>
//         <Layout {...this.props} />
//         <SocketHandlerContainer />
//       </>
//     );
//   }
// }
//
// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   isProcessing: PropTypes.bool.isRequired,
//   checkAuth: PropTypes.func.isRequired,
//   headerIsShown: PropTypes.bool,
//   sidebarIsShown: PropTypes.bool,
// };
//
// export default withRouter(PrivateRoute);
