import { SET_MARKETING_RESOURCE_POINTER } from './mkt-actions-type';

const initialState = {
};

const viewNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MARKETING_RESOURCE_POINTER:
    return {
      resource: action.payload
    };
  default:
    return state;
  }
};

export default viewNavigationReducer;