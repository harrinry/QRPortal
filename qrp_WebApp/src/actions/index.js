import { SHOWOVERLAY, HIDEOVERLAY } from './action-types';

export const showOverlay = layout => ({ type: SHOWOVERLAY, payload: layout });
export const hideOverlay = () => ({ type: HIDEOVERLAY });