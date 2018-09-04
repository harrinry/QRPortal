import { NAVIGATION_VIEW, CONTENT_VIEW, ERROR_OCCURRED, LANDING_PAGE } from './body-constants';
import * as ACTIONTYPES from './body-actions-type';

const initialState = {
  view: NAVIGATION_VIEW,
  nav: { data: [], title: undefined, loading: false },
  list:{
    count: 0,
    content:{ data: [], loading: false },
    expandedContent: { data: [], loading: false }
  }
};

const contentBodyReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.SHOW_LANDING_PAGE:
    return {
      ...state,
      view: LANDING_PAGE,
      nav: { data: [], title: undefined, loading: false }
    };
  case ACTIONTYPES.SHOW_NAVIGATION_VIEW:
    return {
      ...state,
      view: NAVIGATION_VIEW
    };
  case ACTIONTYPES.FETCH_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        data: [],
        title: action.payload.title,
        loading: true
      }
    };
  case ACTIONTYPES.SET_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        ...action.payload,
      }
    };
  case ACTIONTYPES.CLEAR_LIST_DATA:
    return {
      ...state,
      list: {
        ...state.list,
        content: { data: [], loading: false },
        expandedContent: { ...state.list.expandedContent }
      }
    };
  case ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        data: [],
        title: ERROR_OCCURRED,
        loading: false
      }
    };
  case ACTIONTYPES.SHOW_CONTENT_VIEW:
    return {
      ...state,
      view: CONTENT_VIEW
    };
  case ACTIONTYPES.SET_LIST_COUNT:
    return {
      ...state,
      list: {
        ...state.list,
        count: action.payload.count,
      }
    };
  case ACTIONTYPES.FETCH_LIST_DATA:{
    return {
      ...state,
      list: {
        ...state.list,
        content: { data: [], loading: true }
      }
    };
  }
  case ACTIONTYPES.SET_LIST_DATA:
    return {
      ...state,
      list: {
        ...state.list,
        content: { ...action.payload },
        expandedContent: { ...state.list.expandedContent }
      }
    };
  case ACTIONTYPES.FETCH_EXPANDED_LIST_DATA: {
    return {
      ...state,
      list: {
        ...state.list,
        expandedContent: { data: [], loading: true }
      }
    };
  }
  case ACTIONTYPES.SET_EXPANDED_LIST_DATA:
    return {
      ...state,
      list: {
        ...state.list,
        expandedContent: { ...action.payload }
      }
    };
  case ACTIONTYPES.FAILED_TO_FETCH_LIST_DATA: {
    return {
      ...state,
      list: {
        ...state.list,
        content: {data: [], loading: false, error: true, errmsg: ERROR_OCCURRED},
        expandedContent: {data: [], loading: false}
      }
    };
  }
  case ACTIONTYPES.FAILED_TO_FETCH_EXPANDED_LIST_DATA: {
    return {
      ...state,
      list: {
        ...state.list,
        expandedContent: {data: [], loading: false, error: true, errmsg: ERROR_OCCURRED}
      }
    };
  }
  default:
    return state;
  }
};

export default contentBodyReducer;