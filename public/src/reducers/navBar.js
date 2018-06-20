import { TOGGLENAVBAR, SETSELECTEDNAVITEM } from '../actions/types';

const initState = {
  selected: {},
  isOpen: false,
};

const navBarReducer = (state = initState, action) => {
  switch (action.type) {
  case SETSELECTEDNAVITEM: 
    return {
      ...state,
      selected: action.payload
    };
  case TOGGLENAVBAR:
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  default:
    return state;
  }
};

export default navBarReducer;