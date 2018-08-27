import { APPEND_PATH_TO_HEADER, GOTO_POINT_IN_HEADER_PATH, SET_PATH_TO_HEADER } from './nv-actions-type';

export const appendToHeaderPath = ( _location ) => {
  return {
    type: APPEND_PATH_TO_HEADER,
    payload: _location
  };
};

export const navigateTo = ( _location ) => {
  return {
    type: GOTO_POINT_IN_HEADER_PATH,
    payload: _location
  };
};

export const setHeaderPath = ( ..._locations ) => {
  return {
    type: SET_PATH_TO_HEADER,
    payload: _locations
  };
};