export const comparePrefix = 'compare/';

export const SECTIONS = {
  extensions: 'extensions'
};

export const cmpQueryBuilder = ( extID, ver1, ver2 ) => `${comparePrefix}${SECTIONS.extensions}/${extID}/${ver1}/${ver2}`;