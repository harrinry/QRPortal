import * as ACTIONTYPES from './cmp-actions-type';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  loading: false,
  isVisible: false,
  isComparing: false,
  error: {
    status: false,
    err: {}
  },
  data: [],
  request: {
    query: undefined,
    type: undefined,
    params: []
  },
  params: {
    vi: undefined,
    vtc: undefined
  }
};


const compareReducers = (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE_STORE:
    return {
      ...state,
      params: {
        ...state.params,
        vi: action.payload.data.cmp ? action.payload.data.cmp : state.params.vi
      }
    };
  case ACTIONTYPES.CMP_DISPLAY_COMPARISON_DATA:
    return {
      ...state,
      isVisible: true
    };
  case ACTIONTYPES.CMP_HIDE_COMPARISON_DATA:
    return {
      ...state,
      isVisible: false
    };
  case ACTIONTYPES.CMP_FETCH_COMPARISON_DATA:{
    const splt = action.payload.query.split(/\//ig);
    return {
      ...state,
      loading: true,
      request: {
        query: action.payload.query,
        type: splt[1],
        params: [
          splt[2],
          splt[3],
          splt[4]
        ]
      }
    };
  }
  case ACTIONTYPES.CMP_ENABLE_COMPARING:
    return {
      ...state,
      isComparing: true,
      isVisible: true
    };
  case ACTIONTYPES.CMP_DISABLE_COMPARING:
    return {
      ...state,
      isComparing: false,
      isVisible: false,
      params: {
        vi: state.params.vi,
        vtc: undefined
      }
    };
  case ACTIONTYPES.CMP_SET_COMPARISON_DATA:
    return {
      ...state,
      loading: false,
      data: action.payload.data,
      error: {
        status: false,
        err: {}
      }
    };
  case ACTIONTYPES.CMP_SET_SELECTED_RULE_IN_COMPARE_LIST:
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
  case ACTIONTYPES.CMP_CLEAR_COMPARE_LIST:
    return {
      ...initialState
    };
  case ACTIONTYPES.CMP_SET_PARAMS: 
    return {
      ...state,
      params: {
        vi: action.payload.vi,
        vtc: action.payload.vtc || state.params.vtc
      }
    };
  case ACTIONTYPES.CMP_ERROR_ON_COMPARE:
    return {
      ...state,
      data: [],
      loading: false,
      error: {
        status: true,
        err: {
          ...action.payload.err
        }
      }
    };
  default:
    return state;
  }
};

export default compareReducers;