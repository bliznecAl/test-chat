import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CChatContainer from '../containers/CChatContainer';
import Clogin from '../containers/Login/Clogin';

const RootRouter = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CChatContainer} />
        <Route path="/login" component={Clogin} />
      </Switch>
    </BrowserRouter>
  </>
);

export default RootRouter;
