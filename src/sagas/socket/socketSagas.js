import {
  takeEvery, put
} from 'redux-saga/effects';
import { initSocketConnection } from '../../common/socket/webSocketConnection';
import { INIT_SOCKET_CONNECTION_ACTIONS, initSocketConnectionActions } from '../../actions/socketActions/initSocketConnectionActions';
import errorHandledSaga from '../common/errorHandledSaga';

export function* connectToSocket () {
  try {
    const socketConnection = yield initSocketConnection(`${'ws://easygraphs.io:9093'}`);

    yield put(initSocketConnectionActions.success(socketConnection));
  }
  catch (error) {
    console.log(error);
    yield put(initSocketConnectionActions.error(error));

    throw error;
  }
}

export default function* socketSagas () {
  yield takeEvery(INIT_SOCKET_CONNECTION_ACTIONS.REQUEST, errorHandledSaga(connectToSocket));
}
