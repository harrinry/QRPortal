import { NUGGETAPI } from './mkt-constants';

export const fetchNuggets = ( technology ) => {
  return fetch(NUGGETAPI + technology)
    .then( res => res.json());
};