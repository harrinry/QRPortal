import { SET_QUALITY_RULES_SEARCH_RESULTS, DISPLAY_QUALITY_RULES_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, HIDE_QUALITY_RULES_SEARCH_RESULTS, SET_SELECTED_SEARCH_RESULT, ERROR_WHILE_FETCHING_SEARCH_RESULTS, SET_QUERY_ON_SEARCH_INITIALIZATION } from './gs-actions-type';
import { errorObject } from './gs-constants';

const initialState = {
  resultsVisible: false,
  results: [],
  query: null, 
};

const globalSearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_QUERY_ON_SEARCH_INITIALIZATION:
    return {
      ...state,
      query: action.payload.query
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
      ...state,
      results: [],
      query: null
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