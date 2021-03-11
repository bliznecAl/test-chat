import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/index.scss';
import store from './common/store/store';
import RootRouter from './routers/RootRouter';

const App = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);

export default App;
