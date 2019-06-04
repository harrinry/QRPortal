/**
 * @param {string|number} elem 
 * @param {string|number[]} arr
 * @returns {boolean}
 */
function existsInArray( elem, arr ){
  return arr.indexOf( elem.id ) !== -1 ? true : false;
}

/**
 * @param {number[]} ids 
 * @param {Object[]} data 
 * @returns {Object[]}
 */
function mapIdsToRules( ids, data ){
  return ids.map( eid => data.find( e => e.id === eid.id ) );
}

// /**
//  * @param {number[]} idList 
//  * @returns {number[]}
//  */
// function extractLiteRules( idList, data, unmappedData ){
//   const filteredIds = idList.filter( elemId => existsInArray( elemId, data ) );
//   return mapIdsToRules( filteredIds, unmappedData);
// }

const liteFilter = ( unmappedData ) => {
  const data = unmappedData.map( e => e.id );
  return ( idList ) => mapIdsToRules( idList.filter( elemId => existsInArray( elemId, data ) ), unmappedData);
};

module.exports = liteFilter;
