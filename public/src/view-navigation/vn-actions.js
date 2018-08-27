import { RETURN_TO_LANDING_PAGE, SET_VIEW_TO_MENU, SET_VIEW_TO_TILES } from './vn-actions-type';

export const goToLandingPage = () => {
  return { type: RETURN_TO_LANDING_PAGE };
};

export const setMenuView = () => {
  return { type: SET_VIEW_TO_MENU };
};

export const setTilesView = () => {
  return { type: SET_VIEW_TO_TILES };
};