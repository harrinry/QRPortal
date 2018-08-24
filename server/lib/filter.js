const filters = {
  cpp: [ 1050571, -2, -3 ],
  dotNet: [141901],
  vb: [138635, 138385],
  rpg: [1008000, 1009000, 1011000, 1012000],
  pli: [1004000, 1005000],
  mssql: [-13,140998],
  sap: [-15,-20],
  html5js: [1020000, 138663]
};

filters.all = [].concat(...filters.cpp, 
  ...filters.dotNet, 
  ...filters.rpg, 
  ...filters.pli, 
  ...filters.mssql, 
  ...filters.sap, 
  ...filters.html5js,
  ...filters.vb);

filters.pure = ( id ) => filters.all.indexOf( id ) === -1 ? true : false;

module.exports = filters;