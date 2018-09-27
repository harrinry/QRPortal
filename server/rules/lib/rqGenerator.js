const fs = require('fs');
const root = require('path');

function generateRulesHydrate( params, path ){
  const _params = params.split('|'),
    pl = path.length;
  let out = {};

  if (_params[2] !== '') {
    const versions = path[pl -1];
    out.cmp = versions.find( v => v.name === _params[2] );
    const _path = out.cmp ? root.resolve('rest/' + out.cmp.href + '/quality-rules.json') : '';
    out.brl = fs.existsSync(_path) ? JSON.parse(fs.readFileSync(_path)) : 'invalid';
  }

  if (_params[0] !== '') {
    if (path.length > 0){
      const std = path[pl -1],
        stdPath = root.resolve('rest/' + std.href + '/items.json'),
        data = fs.existsSync(stdPath) ? JSON.parse(fs.readFileSync(stdPath)) : null,
        sel = data.find( e => e.id === _params[0]),
        _path = sel ? root.resolve('rest/' + sel.href + '/quality-rules.json') : '';
      out.bsl = setSelected(_params[0], data);
      out.brl =  fs.existsSync(_path) ? JSON.parse(fs.readFileSync(_path)) : 'invalid';
    }
  }

  if ( _params[1] !== '' ){
    out.brl = setSelected(_params[1], out.brl);
    out.det = getDetails(_params[1], out.brl);
  }

  return out;
}

function setSelected( id, arr ){
  if(!Array.isArray(arr)) return 'invalid';
  const _id = parseInt(id);
  return arr.map( e => {
    return Object.assign({}, e, {
      selected: e.id === _id
    });
  });
}

function getDetails( id, arr ){
  if(!Array.isArray(arr)) return 'invalid';
  const _id = parseInt(id);
  const _path = arr.find( e => e.id === _id);
  return _path ? JSON.parse(fs.readFileSync(root.resolve('rest/' + _path.href + '.json'))) : 'invalid';
}

module.exports = generateRulesHydrate;