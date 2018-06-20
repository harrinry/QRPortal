import { TOGGLENAVBAR, SETSELECTEDNAVITEM } from './types';

export function toggleNavBar(){
  return {
    type: TOGGLENAVBAR
  };
}

export function setSelectedNavItem( ref ){
  return {
    type: SETSELECTEDNAVITEM,
    payload: ref
  };
}