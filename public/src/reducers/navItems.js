import { OPENMENUELEMENT } from '../actions/types';

const initState = [ 
  {
    name: 'Standards',
    href: '/rest/AIP/quality-standards.json',
    open: false
  }, 
  {
    name:'Technologies',
    href: '/rules/technologies.json',
    open: false
  },
  { 
    name:'Sources',
    href: '/rules/extensions.json',
    open: false
  }];

const navItemsReducer = (state = initState, action) => {
  switch (action.type) {
  case OPENMENUELEMENT:
    return state.map( (el, index) => {
      return {
        name: el.name,
        href: el.href,
        open: action.payload === index && state[index].open !== true ? true : false
      };
    } );
  default:
    return state;
  }
};

export default navItemsReducer;