
export const getHydrateData = () =>{
  const query = window.location.search;
  return fetch('/rules/hydrate' + query).then( res => res.json() );
};