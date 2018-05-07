
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

    if (idx !== -1) {
      if (idx < 3 && !cpp) {
        cpp = true;
        const cppus = getCppEntries( arr );
        const urls = cppus.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.cpp[2];
        e.href = newHref;
        e.name = 'C/C++';
        return e;
      } else if( idx === 3 && !dotNet){
        dotNet = true;
        return;
      } else if ( idx > 3 && idx <= 7 && !rpm ) {
        rpm = true;
        const us = getRPGEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.rpg[0];
        e.href = newHref;
        e.name = 'RPG';
      } else if ( idx > 7 && idx <= 9 && !pli ) {
        pli = true;
        const us = getPLIEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.pli[0];
        e.href = newHref;
        e.name = 'PLI';
      } else if ( idx > 9 && idx <= 11 && !mssql ) {
        mssql = true;
        const us = getMSSQLEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.mssql[0];
        e.href = newHref;
        e.name = 'SQL Server';
      } else if ( idx > 11 && idx <= 13 && !sap ) {
        sap = true;
        const us = getSAPEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.sap[0];
        e.href = newHref;
        e.name = 'SAP';
      } else {
        return;
      }
    }
    return e;
  });

  return filtered.filter( ele => ele !== undefined );
};