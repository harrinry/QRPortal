import * as ACTIONTYPES from './body-actions-type';

export const showContentView = () => {
  return {
    type: ACTIONTYPES.SHOW_CONTENT_VIEW
  };
};

export const showNavigationView = () => {
  return {
    type: ACTIONTYPES.SHOW_NAVIGATION_VIEW
  };
};

export const showLandingPage = () => {
  return {
    type: ACTIONTYPES.SHOW_LANDING_PAGE
  };
};

export const setListCount = ( count ) => {
  return {
    type: ACTIONTYPES.SET_LIST_COUNT,
    payload: {
      count: count
    }
  };
};