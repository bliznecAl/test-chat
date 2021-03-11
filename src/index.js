import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './common/store/store';

render(
  <App store={store} />,
  document.getElementById('root')
);
