import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChatMessagesList from './ChatMessagesList';

class ChatMessages extends PureComponent {
  render () {
    const { allMessages, user } = this.props;
    return (
      <div className="message-block mt-3 border bg-info rounded">
        {allMessages && (
          allMessages.map((message, index) => (
            <ChatMessagesList key={index} message={message} user={user}/>
          ))
        )}
      </div>
    );
  }
}

ChatMessages.propTypes = {
  allMessages: PropTypes.array,
  user: PropTypes.object
};

export default ChatMessages;
