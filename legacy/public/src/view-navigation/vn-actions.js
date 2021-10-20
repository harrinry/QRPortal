import { SET_VIEW_TO_MENU, SET_VIEW_TO_TILES } from './vn-actions-type';

export const setMenuView = () => {
  return { type: SET_VIEW_TO_MENU };
};

export const setTilesView = () => {
  return { type: SET_VIEW_TO_TILES };
};