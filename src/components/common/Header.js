import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { SOCKET_MESSAGE_TYPES } from '../../common/constatns/socketMessage';

class Header extends PureComponent {
  logOffUser = () => {
    const {
      logOff, connection, auth: { userData }, quitChat
    } = this.props;
    localStorage.removeItem('chatUser');
    connection.send(JSON.stringify(
      { userId: userData.id, name: userData.name, type: SOCKET_MESSAGE_TYPES.QUIT }
    ));
    logOff();
    connection.close();
    quitChat();
  };

  render () {
    const { auth: { userData } } = this.props;
    return (
      <div className="header bg-secondary">
        {userData.id && (
        <Button onClick={this.logOffUser} className="mr-2 float-right" type="button">Exit</Button>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  connection: PropTypes.object,
  logOff: PropTypes.func.isRequired,
  quitChat: PropTypes.func.isRequired,
};

export default Header;
