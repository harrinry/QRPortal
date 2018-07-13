import { TOGGLENAVBAR, SETSELECTEDNAVITEM, OPENMENUELEMENT } from './types';

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

export function openMenuElement( index ){
  return {
    type: OPENMENUELEMENT,
    payload: index
  };
}