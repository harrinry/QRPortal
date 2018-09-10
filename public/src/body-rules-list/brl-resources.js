import { apiFetch, webFetch } from 'common/';

// export const fetchExtensionsList = () => {
//   return fetch(RESOURCES.sources).then(res => res.json());
// };

// export const fetchTechnologiesList = () => {
//   return fetch(RESOURCES.technologies).then(res => res.json());
// };

export const fetchWebData = ( url ) => {
  return webFetch( url );
};

export const fetchData = ( url ) => {
  return apiFetch( url );
};