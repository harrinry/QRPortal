import { SET_VIEW_TO_MENU, SET_VIEW_TO_TILES } from './vn-actions-type';
import { VIEW_TYPES } from './vn-constants';

const initialState = {
  VIEW_TYPE: VIEW_TYPES.TILES_VIEW
};

const viewNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_VIEW_TO_MENU:
    return {
      VIEW_TYPE: VIEW_TYPES.MENU_VIEW
    };
  case SET_VIEW_TO_TILES:
    return {
      VIEW_TYPE: VIEW_TYPES.TILES_VIEW
    };
  default:
    return state;
  }
};

export default viewNavigationReducer;