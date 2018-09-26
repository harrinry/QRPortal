const extMap = require('../../../temp/extensions-map.json');

function generateRulesHydrate( params, path ){
  const _params = params.split('|'),
    pl = path.length;

  let out = {
    bsl: [],
    brl: [],
    cmp: ''
  };

  if (_params[2] !== '') {
    const extension = path[pl -1],
      versions = extMap[extension.id];

    out.cmp = versions.find( v => v.name === _params[2] );
  }

  if ( _params[1] !== '' ){
    if(out.cmp === ''){
      
    }
  }
}

function setSelected( id, arr ){
  return arr.map( e => {
    return Object.assign({}, e, {
      selected: e.id === id
    });
  });
}