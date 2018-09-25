import { FETCH_STANDRADS_LIST_DATA, SET_STANDRADS_LIST_DATA, FAILED_TO_FETCH_STANDRADS_LIST_DATA, SET_SELECTED_STANDARDS_ITEM, FETCH_STANDARDS_INFO_DATA, SET_STANDARDS_INFO_DATA } from './bsl-actions-type';

const initialState = {
  data: [],
  query: null,
  loading: false,
  info: {
    data: {},
    loading: false,
    visible: false
  }
};


const standardsListReducers = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_STANDARDS_INFO_DATA:
    return {
      ...state,
      info: {
        data: {},
        loading: true,
        visible: true
      }
    };
  case SET_STANDARDS_INFO_DATA:
  case FETCH_STANDRADS_LIST_DATA:
    return {
      data: [],
      query: action.payload.query,
      loading: true,
      info: {}
    };
  case SET_STANDRADS_LIST_DATA: 
    return {
      data: action.payload.data,
      query: action.payload.query,
      loading: false,
      info: {}
    };
  case FAILED_TO_FETCH_STANDRADS_LIST_DATA:
    return {
      data: [{...action.payload.err}],
      query: action.payload.query,
      loading: false,
      info: {}
    };
  case SET_SELECTED_STANDARDS_ITEM: 
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
  default:
    return state;
  }
};

export default standardsListReducers;