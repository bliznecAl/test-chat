import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';

import './styles/index.scss';
import store from './common/store/store';
import RootRouter from './routers/RootRouter';
import Footer from './components/common/Footer';
import CHeader from './containers/Header/CHeader';

const App = () => (
  <Provider store={store}>
    <CHeader />
    <RootRouter />
    <Footer />
  </Provider>
);

export default App;
