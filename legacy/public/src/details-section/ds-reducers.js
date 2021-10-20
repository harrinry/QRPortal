import * as ACTIONTYPES from './ds-actions-type';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  query: null,
  visible: true,
  data: undefined,
  loading: false
};

const detailsReducers = (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE_STORE: 
    return {
      ...state,
      data: action.payload.data.det ? action.payload.data.det : ( action.payload.search ? action.payload.search.det : state.data)
    };
  case ACTIONTYPES.CLEAR_CONTENT_DETAILS:
    return {
      ...state,
      query: null,
      data: undefined
    };
  case ACTIONTYPES.ERROR_ON_DETAILS_FETCH: 
    return {
      ...state,
      query: action.payload.query,
      data: {
        ...action.payload.err
      }
    };
  case ACTIONTYPES.FETCHING_DETAILS_CONTENT_FROM_API:
    return {
      ...state,
      query: null,
      data: undefined,
      loading: true
    };
  case ACTIONTYPES.SET_CONTENT_DETAILS:
    return {
      ...state,
      query: action.payload.query,
      data: {
        ...action.payload.data
      },
      loading: false
    };
  default:
    return state;
  }
};

export default detailsReducers;