import { EN } from './lang-constants';
import { SETLANGUAGE } from './lang-actions-type';

const initialState = {
  language: EN
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
  case SETLANGUAGE: 
    return { language: action.payload };
  default:
    return state;
  }
};

export default languageReducer;