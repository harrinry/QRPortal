import { TOGGLENAVBAR } from '../actions/types';

const initialState = {
  navBar: {
    isOpen: false,
    sections: [
      {
        name: 'Standards',
      },
      {
        name: 'Technologies'
      },
      {
        name: 'Sources'
      }
    ]
  }
};

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
  case TOGGLENAVBAR:
    return {
      ...state,
      navBar: {
        isOpen: !state.navBar.isOpen,
        sections: state.navBar.sections
      }
    };
  default:
    return state;
  }
};

export default rootReducer;