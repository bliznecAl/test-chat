import { all } from 'redux-saga/effects';
import socketSagas from './socket/socketSagas';

export default function* rootSagas () {
  yield all([
    socketSagas()
  ]);
}
