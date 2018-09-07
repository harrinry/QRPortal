const filters = {
  cpp: {
    name: 'C/C++',
    method: 'filter',
    filter:[ 1050571, -2, -3 ]
  },
  dotNet: {
    filter: [141901],
    method: 'validate'
  },
  vb: {
    name: 'VB.NET',
    filter: [138635, 138385],
    method: 'filter'
  },
  rpg:{
    name: 'RPG',
    filter:[1008000, 1009000, 1011000, 1012000],
    method: 'filter'
  },
  pli: {
    name: 'PLI',
    filter:[1004000, 1005000],
    method: 'filter'
  },
  mssql: {
    name: 'SQL Server',
    filter: [-13,140998],
    method: 'filter'
  },
  sap: {
    name: 'SAP',
    filter:[-15,-20],
    method: 'filter'
  },
  html5js: {
    name: 'HTML5 JavaScript',
    filter:[1020000, 138663],
    method: 'filter'
  }
};

filters.all = ( function () {
  const keys = Object.keys(filters);
  let ret = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    ret.push(...filters[key].filter);
  }
  return ret;
}());

filters.pure = ( id ) => filters.all.indexOf( id ) === -1 ? true : false;

module.exports = filters;