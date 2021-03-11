import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ChatMessages extends PureComponent {
  render () {
    return (
      <div className="message-block mt-3 border bg-info rounded" />
    );
  }
}

ChatMessages.propTypes = {};

export default ChatMessages;
