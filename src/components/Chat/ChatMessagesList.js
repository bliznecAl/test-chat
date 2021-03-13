import React, { PureComponent } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

class ChatMessagesList extends PureComponent {
  render () {
    const { message, user } = this.props;
    console.log(user);
    return (
      <div className="border rounded bg-light m-1">
        <span className="ml-2 text-success">{message.name === user.name ? 'You' : message.name}</span>
        <span className="ml-1">{parse(message.message)}</span>
      </div>
    );
  }
}

ChatMessagesList.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

export default ChatMessagesList;
