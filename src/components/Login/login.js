import React, { Component } from 'react';
import {
  Form, Label, Input, Button, FormGroup, Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import namor from "namor";

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
      id: namor.generate(),
      name: userName
    };
    logIn(user);
    localStorage.setItem('chatUser', JSON.stringify(user));
    history.push('/');
  }

  render () {
    return (
      <Container>
        <div className="login-block">
          <Form inline>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="me-sm-2">Email</Label>
              <Input type="text" name="email" id="name" placeholder="enter your name" onChange={this.inputValue} />
            </FormGroup>
            <Button onClick={this.logIn}>Submit</Button>
          </Form>
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
