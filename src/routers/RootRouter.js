import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CChatContainer from '../containers/CChatContainer';
import SocketHandler from '../containers/SocketHandler/SocketHandlerContainer';
import Clogin from '../containers/Login/Clogin';

const RootRouter = () => (
  <>
    <BrowserRouter>
      <SocketHandler />
      <Switch>
        <Route exact path="/" component={CChatContainer} />
        <Route path="/login" component={Clogin} />
      </Switch>
    </BrowserRouter>
  </>
);

export default RootRouter;
