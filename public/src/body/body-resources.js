export const STATIC_QUERIES = {
  technologies: 'rules/technologies.json',
  sources: 'rules/extensions.json'
};

export const fetchExtensionsList = () => {
  return fetch(STATIC_QUERIES.sources).then(res => res.json());
};

export const fetchTechnologiesList = () => {
  return fetch(STATIC_QUERIES.technologies).then(res => res.json());
};