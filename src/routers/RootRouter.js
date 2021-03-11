import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

const RootRouter = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </BrowserRouter>
  </>
);

export default RootRouter;
