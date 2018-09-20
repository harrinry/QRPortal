import * as ACTIONTYPES from './cmp-actions-type';

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
  }
};


const compareReducers = (state = initialState, action) => {
  switch (action.type) {
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
    };
  case ACTIONTYPES.CMP_DISABLE_COMPARING:
    return {
      ...state,
      isComparing: false
    };
  case ACTIONTYPES.CMP_SET_COMPARISON_DATA:
    return {
      ...state,
      loading: false,
      data: action.payload.data
    };
  case ACTIONTYPES.CMP_ERROR_ON_COMPARE:
    return {
      ...state,
      data: [],
      loading: false,
      
    };
  default:
    return state;
  }
};

export default compareReducers;