import { RETURN_TO_LANDING_PAGE, APPEND_PATH_TO_HEADER, GOTO_POINT_IN_HEADER_PATH, SET_PATH_TO_HEADER, HYDRATE_STORE } from './nv-actions-type';
import { getHydrateData } from './nv-resources';

export const appendToHeaderPath = ( ..._location ) => {
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

export const goToLandingPage = () => {
  return { type: RETURN_TO_LANDING_PAGE };
};

const hydrateStore = ( data ) => {
  return {
    type: HYDRATE_STORE,
    payload: {
      ...data
    }
  };
};

export const hydrate = () =>{
  return (dispatch) => {
    return getHydrateData().then(
      data => dispatch(hydrateStore(data)),
      err => console.log(err)
    );
  };
};