import { apiFetch, webFetch } from 'common/';

export const fetchWebData = ( url ) => {
  return webFetch( url );
};

export const fetchData = ( url ) => {
  return apiFetch( url );
};