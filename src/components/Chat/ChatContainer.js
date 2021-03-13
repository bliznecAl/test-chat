import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import ChatEditor from './Editor/ChatEditor';
import ChatMessages from './ChatMessages';
import { SOCKET_MESSAGE_TYPES } from '../../common/constatns/socketMessage';

class ChatContainer extends Component {
  componentDidMount () {
    const {
      startSocket, auth: { userData }, history, logIn
    } = this.props;
    const user = localStorage.getItem('chatUser');
    if (!Object.keys(userData).length && !user) {
      history.push('/login');
    }
    if (user) {
      logIn(JSON.parse(user));
    }
    startSocket();
  }

  sendMessage = (messageText) => {
    const { connection, auth } = this.props;
    const { userData } = auth;
    const message = {
      id: userData.id,
      name: userData.name,
      message: messageText,
      type: SOCKET_MESSAGE_TYPES.SEND_MESSAGE,
      [SOCKET_MESSAGE_TYPES.READ]: false
    };
    if (connection) {
      connection.send(JSON.stringify(message));
    }
  }

  render () {
    const { chat, auth } = this.props;
    const { userData } = auth;
    const { allChatMessage } = chat;
    return (
      <Container className="px-3 chat-block">
        <ChatMessages allMessages={allChatMessage} user={userData} />
        <ChatEditor sendMessage={this.sendMessage} />
      </Container>
    );
  }
}

ChatContainer.propTypes = {
  connection: PropTypes.object,
  history: PropTypes.object,
  chat: PropTypes.object,
  auth: PropTypes.object,
  startSocket: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

export default withRouter(ChatContainer);
