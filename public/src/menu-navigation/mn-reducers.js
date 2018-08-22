import * as ACTIONS from './mn-actions-type';


const initialState = {
  std_cast: undefined,
  std_cisq: undefined,
  std_owasp: undefined,
  technologies: undefined,
  extentions: undefined,
  selected: undefined
};

const MenuNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.SETBUSINESSCRITERIA:
    return {
      ...state,
      std_cast: action.payload.data
    };
  case ACTIONS.SETCISQ:
    return {
      ...state,
      std_cisq: action.payload.data
    };
  case ACTIONS.SETOWASP:
    return {
      ...state,
      std_owasp: action.payload.data
    };
  case ACTIONS.SETTECHNOLOGIES:
    return {
      ...state,
      technologies: action.payload.data
    };
  case ACTIONS.SETEXTENTIONS:
    return {
      ...state,
      extentions: action.payload.data
    };
  case ACTIONS.SETSELECTEDITEM: 
    return {
      ...state,
      selected: action.payload.data
    };
  default:
    return state;
  }
};

export default MenuNavigationReducer;