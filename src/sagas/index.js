import { all } from 'redux-saga/effects';
import userSagas from '../modules/user/sagas';

export default function* rootSaga(getState) {
  yield all([userSagas()]);
}
