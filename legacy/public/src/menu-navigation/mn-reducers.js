import * as ACTIONS from './mn-actions-type';
import { updateExtensionVersionArray, setLoadingState } from './mn-lib';

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
  std_cwe: {
    data: undefined,
    loading: false
  },
  standards: {
    data: [],
    loading: false,
  },
  technologies: {
    data: undefined,
    loading: false
  },
  extensions: {
    data: [],
    loading: false
  },
  selected: undefined
};

const MenuNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.FETCH_QUALITY_STANDARDS_FOR_MENU:
    return {
      ...state,
      standards: {
        data: state.standards.data,
        query: action.payload.query,
        loading: true
      }
    };
  case ACTIONS.SET_QUALITY_STANDARDS_FOR_MENU:
    return {
      ...state,
      standards: {
        data: action.payload.data,
        query: action.payload.query,
        loading: false
      }
    };
  case ACTIONS.FETCHPOPULATATIONQUALITYSTANDARDITEMS:
    return {
      ...state,
      standards: {
        data: state.standards.data.map( e => {
          if (e.href === action.payload.query) {
            return {
              ...e,
              loading: true
            };
          } else return {
            ...e,
            loading: false
          };
        }),
        loading: false
      }
    };
  case ACTIONS.POPULATEQUALITYSTANDARDITEMS:
    return {
      ...state,
      standards: {
        data: state.standards.data.map( e => {
          if (e.href === action.payload.query) {
            return {
              ...e,
              content: action.payload.data,
              loading: false
            };
          }
        }),
        loading: false
      }
    };
  case ACTIONS.SETBUSINESSCRITERIA:
    return {
      ...state,
      std_cast: {
        data: action.payload.data,
        loading: false
      }
    };
  case ACTIONS.SETCWE:
    return {
      ...state,
      std_cwe: {
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
        data: [...action.payload.data].map( ( e, i ) => {
          return {
            ...e,
            index: i
          };
        }),
        loading: false
      }
    };
  case ACTIONS.SET_EXTENSION_VERSION:
    return {
      ...state,
      extensions:{
        data: updateExtensionVersionArray(state.extensions.data, action.payload),
        loading: false
      }
    };
  case ACTIONS.FETCH_EXTENSION_VERSION:
    return {
      ...state,
      extensions:{
        data: setLoadingState(state.extensions.data, action.payload),
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
  case ACTIONS.FETCHCWE: 
    return {
      ...state,
      std_cwe: {
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