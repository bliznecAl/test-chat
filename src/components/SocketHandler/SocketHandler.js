import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SOCKET_MESSAGE_TYPES } from '../../common/constatns/socketMessage';

class SocketHandler extends React.Component {
  componentDidUpdate (prevProps) {
    const {
      connection, sendMessage, allChatMessage, auth
    } = this.props;
    const { userData } = auth;
    if (connection) {
      connection.addEventListener('message', (e) => {
        if (e && e.data) {
          const parsedData = JSON.parse(e.data);
          const {
            type, message, id, name
          } = parsedData;

          switch (type) {
            case SOCKET_MESSAGE_TYPES.ERROR:
              return;

            case SOCKET_MESSAGE_TYPES.SEND_MESSAGE:
              const newMessageList = [...allChatMessage];
              newMessageList.push({
                id,
                name,
                message
              });
              sendMessage(newMessageList);
              if (userData.name !== name) {
                connection.send(JSON.stringify({ id, [SOCKET_MESSAGE_TYPES.READ]: true }));
              }
              break;

            case SOCKET_MESSAGE_TYPES.JOIN:
            case SOCKET_MESSAGE_TYPES.QUIT:
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
  auth: PropTypes.object,
  allChatMessage: PropTypes.array,
  sendMessage: PropTypes.func.isRequired,
  joinChat: PropTypes.func.isRequired,
  quitChat: PropTypes.func.isRequired
};

export default withRouter(SocketHandler);
