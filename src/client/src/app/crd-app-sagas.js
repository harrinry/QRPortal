import Cookies from 'js-cookie';

import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as appActions from './crd-app-actions';
import appActionsType from './crd-app-actions-type';
import appResource from './crd-app-resource';
import { setAxiosAuthHeader, unsetAxiosAuthHeader } from './crd-app-utils';
import { AUTH_COOKIE_KEY } from 'app/crd-app-constants';

import { encode as btoa } from 'base-64';

export function* getMainMenu() {
  try {
    const mainMenu = yield call(appResource.getMainMenu);
    const filteredMainMenu = {
      ...mainMenu,
      items: mainMenu.items.filter(item => item.name !== 'extensions'),
    };

    yield put(appActions.getMainMenuSuccess(filteredMainMenu));
  } catch ({ response }) {
    yield put(appActions.getMainMenuFailure());
  }
}

export function* getSubMenu(action) {
  const { url, updateIndex } = action.payload;

  try {
    const subMenu = yield call(appResource.getSubMenu, url);

    yield put(appActions.getSubMenuSuccess(subMenu, url, updateIndex));
  } catch ({ response }) {
    yield put(appActions.getSubMenuFailure());
  }
}

export function* getRulesList(action) {
  const { url } = action.payload;

  try {
    const rulesList = yield call(appResource.getRulesList, url);

    yield put(appActions.getRulesListSuccess(rulesList));
  } catch ({ response }) {
    yield put(appActions.getRulesListFailure());
  }
}

export function* getRuleDetails(action) {
  const { ruleId } = action.payload;

  try {
    const ruleDetails = yield call(appResource.getRuleDetails, ruleId);

    yield put(appActions.getRuleDetailsSuccess(ruleDetails));
  } catch ({ response }) {
    yield put(appActions.getRuleDetailsFailure());
  }
}

export function* login(action) {
  const { username, password } = action.payload;

  try {
    const { jwt, expires } = yield call(appResource.login, username, password);

    yield put(appActions.setAuthentication(!!jwt));
    const expiryDate = new Date(expires);

    const enodedJwt = btoa(jwt);

    Cookies.set(AUTH_COOKIE_KEY, enodedJwt, { expires: expiryDate, path: '/' });

    setAxiosAuthHeader(jwt);
    yield put(appActions.loginSuccess());
  } catch (error) {
    const { response = {} } = error;
    const { status, statusText } = response;

    let errorMessage = '';

    if (status) {
      errorMessage = `${status}: `;
    }
    errorMessage = errorMessage + statusText;
    yield put(appActions.loginFailure(errorMessage));
  }
}

export function* logout() {
  try {
    Cookies.remove(AUTH_COOKIE_KEY, { path: '/' });
    unsetAxiosAuthHeader();
  } catch (error) {
    // @TODO add error notification
  }
}

export function* watchApp() {
  yield takeLatest(appActionsType.GET_MAIN_MENU_REQUEST, getMainMenu);
  yield takeLatest(appActionsType.GET_SUB_MENU_REQUEST, getSubMenu);
  yield takeLatest(appActionsType.GET_RULES_LIST_REQUEST, getRulesList);
  yield takeLatest(appActionsType.GET_RULE_DETAILS_REQUEST, getRuleDetails);
  yield takeLatest(appActionsType.LOGIN, login);
  yield takeLatest(appActionsType.LOGOUT, logout);
}

export const appSagas = [
  fork(watchApp),
];
