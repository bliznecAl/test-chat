import { call, put } from 'redux-saga/effects';

const errorHandledSaga = (saga) => {
  return function* (...args) {
    try {
      return yield call(saga, ...args);
    }
    catch (error) {
      console.error('error handled by saga handler-wrapper', error);
      return yield put();
    }
  };
};

export default errorHandledSaga;
