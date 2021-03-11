import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CChatContainer from '../containers/CChatContainer';

const RootRouter = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CChatContainer} />
      </Switch>
    </BrowserRouter>
  </>
);

export default RootRouter;
