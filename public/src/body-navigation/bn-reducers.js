import * as ACTIONTYPES from './bn-actions-type';
import { ERROR_PREFIX } from './bn-constants';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  data: [], 
  query: null,
  title: null, 
  icon: null,
  loading: false
};


const TileNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.FETCH_NAVIGATION_DATA:
    return {
      query: action.payload.query,
      data: [],
      title: action.payload.title,
      icon: action.payload.icon,
      loading: true
    };
  case ACTIONTYPES.SET_NAVIGATION_DATA:
    return {
      ...state,
      data: action.payload.data,
      loading: false
    };
  case ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA:
    return {
      ...state,
      title: ERROR_PREFIX + state.title,
      error: action.payload.err,
      loading: false
    };
  case ACTIONTYPES.CLEAR_NAVIGATION_DATA:
    return {
      ...initialState
    };
  case HYDRATE_STORE:
    return action.payload.nav ? {
      ...initialState,
      data: action.payload.nav.data,
      title: action.payload.nav.title,
      icon: action.payload.nav.icon,
      query: action.payload.nav.query
    } : { ...initialState };
  default:
    return state;
  }
};

export default TileNavigationReducer;