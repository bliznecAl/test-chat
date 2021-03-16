import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChatMessagesList from './ChatMessagesList';

class ChatMessages extends PureComponent {
  render () {
    const { allMessages, user } = this.props;
    return (
      <div id="message-block" className="message-block mt-3 border bg-info rounded">
        {allMessages && (
          Object.keys(allMessages).map((message, index) => (
            <ChatMessagesList key={index} message={allMessages[message]} user={user} />
          ))
        )}
      </div>
    );
  }
}

ChatMessages.propTypes = {
  allMessages: PropTypes.object,
  user: PropTypes.object
};

export default ChatMessages;
