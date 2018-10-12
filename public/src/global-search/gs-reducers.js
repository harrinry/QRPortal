import { SET_QUALITY_RULES_SEARCH_RESULTS, DISPLAY_QUALITY_RULES_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, HIDE_QUALITY_RULES_SEARCH_RESULTS, SET_SELECTED_SEARCH_RESULT, ERROR_WHILE_FETCHING_SEARCH_RESULTS, SET_QUERY_ON_SEARCH_INITIALIZATION } from './gs-actions-type';
import { errorObject } from './gs-constants';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  resultsVisible: false,
  results: [],
  query: null,
  type: null
};

const globalSearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE_STORE:
    return {
      resultsVisible: action.payload.search ? true : false,
      results: action.payload.search ? action.payload.search.data : [],
      query: action.payload.search ? action.payload.search.query : null,
      type: action.payload.search ? action.payload.search.type: null
    };
  case SET_QUERY_ON_SEARCH_INITIALIZATION:
    return {
      ...state,
      query: action.payload.query,
      type: action.payload.type
    };
  case SET_QUALITY_RULES_SEARCH_RESULTS: 
    return {
      ...state,
      results: action.payload.results,
    };
  case DISPLAY_QUALITY_RULES_SEARCH_RESULTS:
    return {
      ...state,
      resultsVisible: true
    };
  case HIDE_QUALITY_RULES_SEARCH_RESULTS:
    return {
      ...state,
      resultsVisible: false
    };
  case CLEAR_SEARCH_RESULTS:
    return {
      ...initialState 
    };
  case SET_SELECTED_SEARCH_RESULT:
    return {
      ...state,
      results: state.results.map( i => {
        if (i.id === action.payload.itemRef) {
          return {
            ...i,
            selected: true
          };
        }
        return {
          ...i,
          selected: false
        };
      })
    };
  case ERROR_WHILE_FETCHING_SEARCH_RESULTS:
    return {
      ...state,
      loading: false,
      results: [ {
        ...errorObject,
        id: action.payload.err.statusCode
      } ]
    };
  default:
    return state;
  }
};

export default globalSearchReducer;