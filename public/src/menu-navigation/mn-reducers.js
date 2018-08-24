import * as ACTIONS from './mn-actions-type';


const initialState = {
  std_cast: {
    data: undefined,
    loading: false
  },
  std_cisq: {
    data: undefined,
    loading: false
  },
  std_owasp: {
    data: undefined,
    loading: false
  },
  technologies: {
    data: undefined,
    loading: false
  },
  extensions: {
    data: undefined,
    loading: false
  },
  selected: undefined
};

const MenuNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.SETBUSINESSCRITERIA:
    return {
      ...state,
      std_cast: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.SETCISQ:
    return {
      ...state,
      std_cisq: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.SETOWASP:
    return {
      ...state,
      std_owasp: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.SETTECHNOLOGIES:
    return {
      ...state,
      technologies: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.SETEXTENSIONS:
    return {
      ...state,
      extensions: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.FETCHBUSINESSCRITERIA: 
    return {
      ...state,
      std_cast: {
        data: undefined,
        loading: true
      }
    };
  case ACTIONS.FETCHCISQ: 
    return {
      ...state,
      std_cisq: {
        data: undefined,
        loading: true
      }
    };
  case ACTIONS.FETCHOWASP:
    return {
      ...state,
      std_owasp: {
        data: undefined,
        loading: true
      }
    };
  case ACTIONS.FETCHEXTENSIONS:
    return {
      ...state,
      extensions: {
        data: undefined,
        loading: true
      }
    };
  case ACTIONS.FETCHTECHNOLOGIES:
    return {
      ...state,
      technologies: {
        data: undefined,
        loading: true
      }
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