
const filters = require('./filter');
const MultiQuery = require('./multiqueryurl');
const STRUCT = require('./dataConstruct/struct');
const KeyMap = require('./dataConstruct/keyMap');

const filteredElement = STRUCT('id', 'name','href', 'glob');
const KEYS = KeyMap(filters);
const KEYSARRAY = Object.keys(KEYS);
const KEYLENGTH = KEYSARRAY.length;

const is = ( key, id ) => {
  switch (key) {
  case KEYS.pure:
    return filters.pure( id );    
  default:
    return filters[key].filter.indexOf( id ) === -1 ? false : true;
  }
};

const getEntries = ( key, arrList ) => arrList.filter( entry => is( key, entry.id ) );

const genGlobURL = ( entriesArray ) => {
  const urls = entriesArray.map( a => a.href + '/quality-rules' ),
    globURL = MultiQuery( ...urls );
  return globURL;
};

const filterFor = ( key, listArray, title, __map ) => {
  const entries = getEntries( key, listArray );
  __map.validate( key );
  return new filteredElement( filters[key].filter[0], title, genGlobURL( entries ), entries );
};

function StatusMap ( keys ){
  const ml = keys.length;
  for (let i = 0; i < ml; i++) {
    switch (keys[i]) {
    case KEYS.pure:
    case KEYS.all:
      break;
    default:
      this[keys[i]] = false;
      break;
    }
  }

  return this;
}

StatusMap.prototype.validate = function validate ( key ){ 
  this[key] = true; 
};

const createStatusMap = () => {
  const keys = Object.keys(filters),
    ret = new StatusMap( keys );

  return ret;
};

const filterArray = ( listArray ) => {
  let statusMap = createStatusMap();

  const filtered = listArray.map( listEntry => {
    const eId = listEntry.id;

    if( is(KEYS.pure, eId) ) return new filteredElement(listEntry.id, listEntry.name, listEntry.href + '/quality-rules', null);

    let ret;
    for (let i = 0; i < KEYLENGTH; i++) {
      const key = KEYSARRAY[i];
      const fltrConfig = filters[key];
      
      if (key === KEYS.pure  || key === KEYS.all) continue;

      if (!statusMap[key] && is(KEYS[key], eId)) {
        if (fltrConfig.method === 'validate') {
          statusMap.validate(KEYS[key]);
          break;
        } else if (fltrConfig.method === 'filter'){
          ret = filterFor(KEYS[key], listArray, fltrConfig.name, statusMap);
          break;
        }
      }
    }
    return ret;
  });
  return filtered.filter( ele => ele !== undefined );
};

module.exports = filterArray;
