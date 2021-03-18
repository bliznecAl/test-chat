import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SOCKET_MESSAGE_TYPES } from '../../common/constatns/socketMessage';

class SocketHandler extends React.Component {
  componentDidMount () {
    const {
      connection, saveMessage, setReadStatus, joinChatUser
    } = this.props;
    if (connection) {
      connection.addEventListener('message', (e) => {
        if (e && e.data) {
          const parsedData = JSON.parse(e.data);
          const {
            type, message, messageId, userId, name, readStatus, sendTime
          } = parsedData;

          const newMessage = {
            userId,
            messageId,
            name,
            message,
            readStatus,
            sendTime
          };

          switch (type) {
            case SOCKET_MESSAGE_TYPES.ERROR:
              return;

            case SOCKET_MESSAGE_TYPES.SEND_MESSAGE:
              saveMessage(newMessage);
              break;

            case SOCKET_MESSAGE_TYPES.READ:
              setReadStatus(newMessage);
              break;
            case SOCKET_MESSAGE_TYPES.JOIN:
              joinChatUser({ name, type, userId });
              break;

            default:
              break;
          }
        }
      });

      connection.onclose = (event) => {
        console.log(event);
      };
    }
  }

  render () {
    return null;
  }
}

SocketHandler.propTypes = {
  connection: PropTypes.object,
  allChatMessages: PropTypes.object,
  saveMessage: PropTypes.func.isRequired,
  setReadStatus: PropTypes.func.isRequired,
  joinChatUser: PropTypes.func.isRequired,
  quitChatUser: PropTypes.func.isRequired
};

export default withRouter(SocketHandler);
