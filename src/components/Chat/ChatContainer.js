import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import uniq from 'uniqid';
import moment from 'moment';
import { Container } from 'reactstrap';
import ChatEditor from './Editor/ChatEditor';
import ChatMessages from './ChatMessages';
import { SOCKET_MESSAGE_TYPES } from '../../common/constatns/socketMessage';
import SocketHandler from '../../containers/SocketHandler/SocketHandlerContainer';

class ChatContainer extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      readMessageList: []
    };
  }

  componentDidMount () {
    const chatBlock = document.getElementById('message-block');
    document.addEventListener('mousemove', (e) => {
      if (!document.hidden
          && ((chatBlock.clientHeight + chatBlock.scrollTop) === chatBlock.scrollHeight)) {
        this.sendReadMessageStatus();
      }
    });
    const {
      startSocket, auth: { userData }, history, logIn, connection
    } = this.props;
    const user = localStorage.getItem('chatUser');
    if (!Object.keys(userData).length && !user) {
      history.push('/login');
    }
    if (user) {
      logIn(JSON.parse(user));
    }
    if (!connection) {
      startSocket();
    }
  }

  componentDidUpdate () {
    const { chat } = this.props;
    const messageBlock = document.getElementById('message-block');
    if (!document.hidden) {
      this.sendReadMessageStatus();
    }
    if ((messageBlock.clientHeight + messageBlock.scrollTop) !== messageBlock.scrollHeight) {
      messageBlock.scrollTo(0, messageBlock.clientHeight + messageBlock.scrollTop);
    }
  }

  sendReadMessageStatus = () => {
    const { connection, chat, auth } = this.props;
    const { allChatMessages } = chat;
    const { userData } = auth;
    // eslint-disable-next-line max-len
    const aa = Object.keys(allChatMessages).filter(message => allChatMessages[message].userId !== userData.id
        && !allChatMessages[message].readStatus);
    if (!aa.length) return false;
    return Object.keys(allChatMessages).forEach(item => {
      const message = allChatMessages[item];
      if (message.userId !== userData.id && !message.readStatus) {
        const sendMessage = {
          ...message,
          [SOCKET_MESSAGE_TYPES.READ]: true,
          type: SOCKET_MESSAGE_TYPES.READ
        };
        connection.send(JSON.stringify(sendMessage));
      }
    });
  }

  sendMessage = (messageText) => {
    const { connection, auth } = this.props;
    const { userData } = auth;
    const message = {
      userId: userData.id,
      name: userData.name,
      sendTime: moment().format('hh[:]mma DD[/]MM[/]YY'),
      messageId: uniq(),
      message: messageText,
      type: SOCKET_MESSAGE_TYPES.SEND_MESSAGE,
      [SOCKET_MESSAGE_TYPES.READ]: false
    };
    if (connection) {
      connection.send(JSON.stringify(message));
    }
  }

  render () {
    const { chat, auth, connection } = this.props;
    const { userData } = auth;
    const { allChatMessages } = chat;
    return (
      <Container id="chat-block" className="px-3 chat-block">
        <ChatMessages allMessages={allChatMessages} user={userData} />
        <ChatEditor sendMessage={this.sendMessage} />
        {connection && userData.name && (
        <SocketHandler />
        )}
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
  sendReadStatus: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

export default withRouter(ChatContainer);
