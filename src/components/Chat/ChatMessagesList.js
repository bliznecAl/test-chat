import React, { PureComponent } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

class ChatMessagesList extends PureComponent {
  render () {
    const { message, user } = this.props;
    return (
      <React.Fragment>
        {message.type ? (
          <div className="bg-transparent w-100 my-2 text-center">
            <span className="text-info p-1 my-2 bg-light text-break join-status rounded">
              {message.name} {message.type} the chat
            </span>
          </div>
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

ChatMessagesList.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

export default ChatMessagesList;
