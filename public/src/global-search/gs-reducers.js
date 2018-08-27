import { SET_QUALITY_RULES_SEARCH_RESULTS, DISPLAY_QUALITY_RULES_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, HIDE_QUALITY_RULES_SEARCH_RESULTS } from './gs-actions-type';

const initialState = {
  resultsVisible: false,
  results: [],
  query: null, 
};

const globalSearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_QUALITY_RULES_SEARCH_RESULTS: 
    return {
      ...state,
      results: action.payload.results,
      query: action.payload.query
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
  default:
    return state;
  }
};

export default globalSearchReducer;