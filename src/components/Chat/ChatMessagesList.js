import React, { PureComponent } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

class ChatMessagesList extends PureComponent {
  render () {
    const { message, user } = this.props;
    return (
      <div className="border rounded bg-light m-3 message">
        <div>
          <span className="ml-2 text-success">
            {message.name === user.name ? 'You' : message.name}
          </span>
          {message.readStatus && message.name === user.name && (
          <span className="mr-2 text-info float-right">read</span>
          )}
        </div>
        <div className="px-3">{parse(message.message)}</div>
        <div>
          <span className="mx-2 text-secondary">{message.sendTime}</span>
        </div>
      </div>
    );
  }
}

ChatMessagesList.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

export default ChatMessagesList;
