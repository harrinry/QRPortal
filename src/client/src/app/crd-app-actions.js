import appActionsType from './crd-app-actions-type';

export const getMainMenu = () => ({
  type: appActionsType.GET_MAIN_MENU_REQUEST,
});

export const getMainMenuSuccess = mainMenu => ({
  type: appActionsType.GET_MAIN_MENU_SUCCESS,
  payload: {
    mainMenu,
  },
});

export const getMainMenuFailure = () => ({
  type: appActionsType.GET_MAIN_MENU_FAILURE,
});

export const resetStore = () => ({
  type: appActionsType.RESET_REDUX_STORE,
});

export const getSubMenu = (url, updateIndex) => ({
  type: appActionsType.GET_SUB_MENU_REQUEST,
  payload: {
    url,
    updateIndex,
  },
});

export const getSubMenuSuccess = (subMenu, url, updateIndex) => ({
  type: appActionsType.GET_SUB_MENU_SUCCESS,
  payload: {
    subMenu,
    url,
    updateIndex,
  },
});

export const getSubMenuFailure = () => ({
  type: appActionsType.GET_SUB_MENU_FAILURE,
});

export const getRuleDetails = (ruleId, isLoggedIn) => ({
  type: appActionsType.GET_RULE_DETAILS_REQUEST,
  payload: {
    ruleId,
    isLoggedIn,
  },
});

export const getRuleDetailsSuccess = ruleDetails => ({
  type: appActionsType.GET_RULE_DETAILS_SUCCESS,
  payload: {
    ruleDetails,
  },
});

export const getRuleDetailsFailure = () => ({
  type: appActionsType.GET_RULE_DETAILS_FAILURE,
});

export const getRulesList = url => ({
  type: appActionsType.GET_RULES_LIST_REQUEST,
  payload: {
    url,
  },
});

export const getRulesListSuccess = rulesList => ({
  type: appActionsType.GET_RULES_LIST_SUCCESS,
  payload: {
    rulesList,
  },
});

export const getRulesListFailure = () => ({
  type: appActionsType.GET_RULES_LIST_FAILURE,
});

export const login = (username, password) => ({
  type: appActionsType.LOGIN,
  payload: {
    username,
    password,
  },
});

export const loginSuccess = () => ({
  type: appActionsType.LOGIN_SUCCESS,
});

export const loginFailure = errorMessage => ({
  type: appActionsType.LOGIN_FAILURE,
  payload: {
    loginErrorMessage: errorMessage,
  },
});

export const logout = () => ({
  type: appActionsType.LOGOUT,
});

export const resetLoginErrorMessage = () => ({
  type: appActionsType.RESET_LOGIN_ERROR_MESSAGE,
});

export const setAuthentication = isLoggedIn => ({
  type: appActionsType.SET_AUTHENTICATION,
  payload: {
    isLoggedIn,
  },
});
