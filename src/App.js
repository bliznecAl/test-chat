import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';

import './styles/index.scss';
import store from './common/store/store';
import RootRouter from './routers/RootRouter';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <RootRouter />
    <Footer />
  </Provider>
);

export default App;
