import MultiQuery from './multiURLQueryBuilder';

const filters = {
  cpp: [ -2, -3, 1050571 ],
  dotNet: [141901],
  rpg: [1008000, 1009000, 1011000, 1012000],
  pli: [1004000, 1005000],
};

filters.all = [].concat(...filters.cpp, ...filters.dotNet, ...filters.rpg,...filters.pli);

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

function isPure( id ){
  return filters.all.indexOf( id );
}

export default function filter( arr ){
  const ID = 'id';
  let cpp, dotNet, rpm, pli;

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
      } else if ( idx > 3 && idx < 8 && !rpm ) {
        rpm = true;
        const us = getRPGEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.rpg[0];
        e.href = newHref;
        e.name = 'RPG';
      } else if ( idx > 7 && !pli ) {
        pli = true;
        const us = getPLIEntries( arr );
        const urls = us.map( a => a.href );
        const newHref = MultiQuery( ID, ...urls );
        e.id = filters.pli[0];
        e.href = newHref;
        e.name = 'PLI';
      } else {
        return;
      }
    }
    return e;
  });

  return filtered.filter( ele => ele !== undefined );
}
