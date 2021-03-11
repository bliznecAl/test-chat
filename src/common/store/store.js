import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../../reducers/rootReducer';
import rootSagas from '../../sagas/rootSagas';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, compose(applyMiddleware(sagaMiddleware), devTools));
sagaMiddleware.run(rootSagas);

export default store;
