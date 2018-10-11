import { SET_VIEW_TO_MENU, SET_VIEW_TO_TILES } from './vn-actions-type';
import { VIEW_TYPES } from './vn-constants';
// import { getDefaultViewType } from './vn-lib';

const initialState = {
  viewType: /*getDefaultViewType() ||*/ VIEW_TYPES.TILES_VIEW
};

const viewNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_VIEW_TO_MENU:
    return {
      viewType: VIEW_TYPES.MENU_VIEW
    };
  case SET_VIEW_TO_TILES:
    return {
      viewType: VIEW_TYPES.TILES_VIEW
    };
  default:
    return state;
  }
};

export default viewNavigationReducer;