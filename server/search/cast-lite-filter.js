/**
 * @param {string|number} elem 
 * @param {string|number[]} arr
 * @returns {boolean}
 */
function existsInArray( elem, arr ){
  return arr.indexOf( elem ) !== -1 ? true : false;
}

/**
 * @param {number[]} ids 
 * @param {Object[]} data 
 * @returns {Object[]}
 */
function mapIdsToRules( ids, data ){
  return data.filter( d => ids.indexOf( d.id ) !== -1 );
}

const liteFilter = ( unmappedData ) => {
  const data = unmappedData.map( e => e.id );
  return ( idList ) => /*mapIdsToRules( */idList.filter( elemId => existsInArray( elemId, data ) )/*, unmappedData)*/;
};

module.exports = liteFilter;
