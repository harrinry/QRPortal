import { all } from 'redux-saga/effects';
import { sagas as appSagas } from './app';

export default function* sagas() {
  yield all([
    ...appSagas,
  ]);
}
