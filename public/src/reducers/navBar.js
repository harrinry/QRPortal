import { TOGGLENAVBAR } from '../actions/types';

const initState = {
  selected: null,
  isOpen: false,
};

const navBarReducer = (state = initState, action) => {
  switch (action.type) {
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