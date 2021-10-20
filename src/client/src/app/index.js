import * as appActions from './crd-app-actions';
import actionsType from './crd-app-actions-type';
import appReducers from './crd-app-reducers';
import { appSagas } from './crd-app-sagas';

export const actions = appActions;
export const actionsTypes = actionsType;
export const reducers = appReducers;
export const sagas = appSagas;

export default {
  actions,
  actionsTypes,
  reducers,
  sagas,
};
