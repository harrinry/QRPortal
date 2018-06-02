
const filters = require('./filter');
const MultiQuery = require('./multiqueryurl');
const STRUCT = require('./dataConstruct/struct');
const KeyMap = require('./dataConstruct/keyMap');

const filteredElement = STRUCT('id', 'name','href', 'glob');
const KEYS = KeyMap(filters);

const is = ( key, id ) => {
  switch (key) {
  case KEYS.pure:
    return filters.pure( id );    
  default:
    return filters[key].indexOf( id ) === -1 ? false : true;
  }
};

const getEntries = ( key, arrList ) => arrList.filter( entry => is( key, entry.id ) );

const genGlobURL = ( entriesArray ) => {
  const ID = 'id',
    urls = entriesArray.map( a => a.href ),
    globURL = MultiQuery( ID, ...urls );
  return globURL;
};

const filterFor = ( key, listArray, title, __map ) => {
  const entries = getEntries( key, listArray );
  __map.validate( key );
  return new filteredElement( filters[key][0], title, genGlobURL( entries ), entries );
  /*({
    id: filters[key][0],
    name: title,
    href: genGlobURL( entries ),
    glob: entries,
  });*/
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

    if( is(KEYS.pure, eId) ) return listEntry;

    let ret;

    if (statusMap.cpp === false && is(KEYS.cpp, eId)){
      ret = filterFor(KEYS.cpp, listArray, 'C/C++', statusMap);
    } else if (!statusMap.dotNet && is(KEYS.dotNet, eId)){
      statusMap.validate(KEYS.dotNet);
      return;
    } else if (!statusMap.rpg && is(KEYS.rpg, eId)){
      ret = filterFor(KEYS.rpg, listArray, 'RPG', statusMap);
    } else if (!statusMap.pli && is(KEYS.pli, eId)){
      ret = filterFor(KEYS.pli, listArray, 'PLI', statusMap);
    } else if (!statusMap.mssql && is(KEYS.mssql, eId)){
      ret = filterFor(KEYS.mssql, listArray, 'SQL Server', statusMap);
    } else if (!statusMap.sap && is(KEYS.sap, eId)){
      ret = filterFor(KEYS.sap, listArray, 'SAP', statusMap);
    } else if (!statusMap.html5js && is(KEYS.html5js, eId)){
      ret = filterFor(KEYS.html5js, listArray, 'HTML5 JavaScript', statusMap);
    }

    return ret;
  });
  return filtered.filter( ele => ele !== undefined );
};

module.exports = filterArray;

/*
function isHTMLJS( id ){
  return filters.html5js.indexOf( id ) === -1 ? false : true;
}

function getHTMLJSEntries( arr ){
  return arr.filter( en => isHTMLJS(en.id));
}

function isCPP( id ){
  return filters.cpp.indexOf( id ) === -1 ? false : true;
}

function getCppEntries( arr ){
  return arr.filter( en => isCPP(en.id));
}

function getRPGEntries( arr ){
  return arr.filter( en => isRPG(en.id));
}

function isRPG( id ){
  return filters.rpg.indexOf( id ) === -1 ? false : true;
}

function getPLIEntries( arr ){
  return arr.filter( en => isPLI(en.id));
}

function isPLI( id ){
  return filters.pli.indexOf( id ) === -1 ? false : true;
}

function getMSSQLEntries( arr ){
  return arr.filter( en => isMSSQL(en.id));
}

function isMSSQL( id ){
  return filters.mssql.indexOf( id ) === -1 ? false : true;
}

function getSAPEntries( arr ){
  return arr.filter( en => isSAP(en.id));
}

function isSAP( id ){
  return filters.sap.indexOf( id ) === -1 ? false : true;
}

function isPure( id ){
  return filters.all.indexOf( id );
}

module.exports = function filter( arr ){
  const ID = 'id';
  let cpp, dotNet, rpm, pli, mssql, sap, html5js;

  const filtered = arr.map( e => {
    const idx = isPure( e.id );
    let ret = {
      id: e.id,
      href: e.href,
      name: e.name
    };
    if (idx !== -1) {
      if (idx < 3 && !cpp) {
        cpp = true;
        const cppus = getCppEntries( arr );
        const urls = cppus.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.cpp[0];
        ret.href = newHref;
        ret.name = 'C/C++';
        ret.glob = cppus;
      } else if( idx === 3 && !dotNet){
        dotNet = true;
        return;
      } else if ( idx > 3 && idx <= 7 && !rpm ) {
        rpm = true;
        const us = getRPGEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.rpg[0];
        ret.href = newHref;
        ret.name = 'RPG';
        ret.glob = us;
      } else if ( idx > 7 && idx <= 9 && !pli ) {
        pli = true;
        const us = getPLIEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.pli[0];
        ret.href = newHref;
        ret.name = 'PLI';
        ret.glob = us;
      } else if ( idx > 9 && idx <= 11 && !mssql ) {
        mssql = true;
        const us = getMSSQLEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.mssql[0];
        ret.href = newHref;
        ret.name = 'SQL Server';
        ret.glob = us;
      } else if ( idx > 11 && idx <= 13 && !sap ) {
        sap = true;
        const us = getSAPEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.sap[0];
        ret.href = newHref;
        ret.name = 'SAP';
        ret.glob = us;
      } else if ( idx > 11 && idx <= 13 && !html5js) {
        html5js = true;
        const us = getHTMLJSEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        ret.id = filters.html5js[0];
        ret.href = newHref;
        ret.name = 'HTML5 JavaScript';
        ret.glob = us;
      } else {
        return;
      }
    }
    return ret;
  });

  return filtered.filter( ele => ele !== undefined );
};*/