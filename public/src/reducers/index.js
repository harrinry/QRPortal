import { TOGGLENAVBAR } from '../actions/types';

const initialState = {
  navBar: {
    selected: null,
    isOpen: false,
    sections: [
      {
        name: 'Standards',
        children:[
          {title:'testing', href: '/rest?q=root.js'},
          {title:'testing', href: '/rest?q=root.js'},
          {title:'testing', href: '/rest?q=root.js'},
          {title:'testing', href: '/rest?q=root.js'},
          {title:'testing', href: '/rest?q=root.js'},
          {title:'testing', href: '/rest?q=root.js'},
        ]
      },
      {
        name: 'Technologies',
        children:[]
      },
      {
        name: 'Sources',
        children:[]
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