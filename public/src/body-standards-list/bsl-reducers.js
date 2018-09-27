import { FETCH_STANDRADS_LIST_DATA, SET_STANDRADS_LIST_DATA, FAILED_TO_FETCH_STANDRADS_LIST_DATA, SET_SELECTED_STANDARDS_ITEM, FETCH_STANDARDS_INFO_DATA, SET_STANDARDS_INFO_DATA, FAILED_TO_FETCH_STANDARDS_INFO_DATA, HIDE_STANDARDS_INFO_DATA } from './bsl-actions-type';
import { HYDRATE_STORE } from '../path-navigation/nv-actions-type';

const initialState = {
  data: [],
  query: null,
  loading: false,
  info: {
    query: undefined,
    data: {},
    loading: false,
    visible: false
  }
};


const standardsListReducers = (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE_STORE:
    return {
      ...state,
      data: action.payload.data.bsl ? action.payload.data.bsl : state.data
    };
  case HIDE_STANDARDS_INFO_DATA:
    return {
      ...state,
      info: {
        ...state.info,
        visible: false
      }
    };
  case FETCH_STANDARDS_INFO_DATA:
    return {
      ...state,
      data: state.data,
      info: {
        data: {},
        loading: true,
        visible: true,
        query: action.payload.query
      }
    };
  case SET_STANDARDS_INFO_DATA:
    return {
      ...state,
      data: state.data,
      info: {
        ...state.info,
        loading: false,
        data: {
          ...action.payload
        }
      }
    };
  case FAILED_TO_FETCH_STANDARDS_INFO_DATA:
    return {
      ...state,
      data: state.data,
      info: {
        ...state.info,
        loading: false,
        data: {
          ...action.payload.err,
          error: true,
          title: 'An error occured, please try again later'
        }
      }
    };
  case FETCH_STANDRADS_LIST_DATA:
    return {
      data: [],
      query: action.payload.query,
      loading: true,
      info: {
        ...initialState.info
      }
    };
  case SET_STANDRADS_LIST_DATA: 
    return {
      data: action.payload.data,
      query: action.payload.query,
      loading: false,
      info: {
        ...initialState.info
      }
    };
  case FAILED_TO_FETCH_STANDRADS_LIST_DATA:
    return {
      data: [{...action.payload.err}],
      query: action.payload.query,
      loading: false,
      info: {
        ...initialState.info
      }
    };
  case SET_SELECTED_STANDARDS_ITEM: 
    return {
      ...state,
      info: {
        ...initialState.info
      },
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
  default:
    return state;
  }
};

export default standardsListReducers;