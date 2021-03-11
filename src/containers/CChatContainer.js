import { connect } from 'react-redux';

import ChatContainer from '../components/Chat/ChatContainer';
import { initSocketConnectionActions } from '../actions/socketActions/initSocketConnectionActions';

const mapStateToProps = ({
  socket: { socketConnection: { connection } },
}) => ({
  connection
});

const mapDispatchToProps = {
  startSocket: initSocketConnectionActions.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
