import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import ChatEditor from './Editor/ChatEditor';
import ChatMessages from "./ChatMessages";

class ChatContainer extends Component {
  componentDidMount () {
    const { startSocket, connection } = this.props;
    console.log(connection);
    startSocket();
  }

  sendMessage = (messageText) => {
    const { connection } = this.props;
    if (connection) {
      connection.send(JSON.stringify({ message: messageText }));
    }
  }

  render () {
    return (
      <Container className="px-3 chat-block">
        <ChatMessages />
        <ChatEditor sendMessage={this.sendMessage} />
      </Container>
    );
  }
}

ChatContainer.propTypes = {
  connection: PropTypes.object,
  startSocket: PropTypes.func.isRequired
};

export default withRouter(ChatContainer);
