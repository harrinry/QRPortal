
const filters = require('./filter');
const MultiQuery = require('./multiqueryurl');

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
  let cpp, dotNet, rpm, pli, mssql, sap;

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
        ret.id = filters.cpp[2];
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
      } else {
        return;
      }
    }
    return ret;
  });

  return filtered.filter( ele => ele !== undefined );
};