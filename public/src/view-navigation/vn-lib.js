import { setLocalStorage, readLocalStorage } from '../common/lib';
import { VIEW_TYPES } from './vn-constants';

function setDefaultViewType( viewType ){
  setLocalStorage( VIEW_TYPES.key, viewType );
}

export function defaultToMenu(){
  setDefaultViewType(VIEW_TYPES.MENU_VIEW);
}

export function defaultToTiles(){
  setDefaultViewType(VIEW_TYPES.TILES_VIEW);
}

export function getDefaultViewType () {
  return readLocalStorage( VIEW_TYPES.key );
}