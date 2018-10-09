import { SET_LIST_DATA, FETCH_LIST_DATA, CLEAR_LIST_DATA, FAILED_TO_FETCH_LIST_DATA, SET_SELECTED_RULE_LIST_ITEM, STOP_LIST_LOADING_STATE } from './brl-actions-type';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  data: [],
  query: null,
  loading: false
};


const RulesListReducers = (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE_STORE: 
    return {
      ...state,
      data: action.payload.data.brl ? action.payload.data.brl : state.data
    };
  case FETCH_LIST_DATA:
    return {
      data: [],
      query: action.payload.query ? action.payload.query : state.query,
      loading: true
    };
  case STOP_LIST_LOADING_STATE:
    return {
      ...state,
      loading: false
    };
  case SET_LIST_DATA: 
    return {
      data: action.payload.data,
      query: action.payload.query,
      loading: false
    };
  case FAILED_TO_FETCH_LIST_DATA:
    return {
      data: [{id: 'error',name:'Failed to fetch Requested Data', critical: true}],
      query: action.payload.query,
      loading: false
    };
  case SET_SELECTED_RULE_LIST_ITEM:
    return {
      ...state,
      data: state.data.map( i => {
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
  case CLEAR_LIST_DATA:
    return {
      ...initialState
    };
  default:
    return state;
  }
};

export default RulesListReducers;