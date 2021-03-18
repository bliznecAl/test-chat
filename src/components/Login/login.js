import React, { Component } from 'react';
import {
  Input, Button, Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import uniq from 'uniqid';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      userName: ''
    };
  }

  inputValue= (e) => {
    this.setState({ userName: e.target.value });
  }

  logIn = () => {
    const { logIn, history } = this.props;
    const { userName } = this.state;
    const user = {
      id: uniq(),
      name: userName
    };
    logIn(user);
    localStorage.setItem('chatUser', JSON.stringify(user));
    history.push('/');
  }

  render () {
    return (
      <Container className="login-page">
        <div className="text-center login-page__block">
          <p>Enter your name to enter the chat</p>
          <div className="d-flex">
            <Input type="text" name="email" id="name" placeholder="enter your name" onChange={this.inputValue} />
            <Button className="ml-2" size="sm" onClick={this.logIn}>Submit</Button>
          </div>
        </div>
      </Container>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
  history: PropTypes.object
};

export default Login;
