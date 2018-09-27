const fs = require('fs');
const root = require('path');
const extMap = require('../../../temp/extensions-map.json');

function generateRulesHydrate( params, path ){
  const _params = params.split('|'),
    pl = path.length;

  let out = {
    bsl: [],
    brl: [],
    cmp: '',
    det: {}
  };

  if (_params[2] !== '') {
    const extension = path[pl -1],
      versions = extMap[extension.id];

    out.cmp = versions.find( v => v.name === _params[2] );
    out.brl = JSON.parse(fs.readFileSync(root.resolve('rest/' + out.cmp.href + '/quality-rules.json')));
  }

  if (_params[0] !== '') {
    const std = path[pl -1],
      data = JSON.parse(fs.readFileSync(root.resolve('rest/' + std.href + '/items.json'))),
      sel = data.find( e => e.id === _params[0]);
    out.bsl = setSelected(_params[0], data);
    out.brl = JSON.parse(fs.readFileSync(root.resolve('rest/' + sel.href + '/quality-rules.json')));
  }

  if ( _params[1] !== '' ){
    out.brl = setSelected(_params[1], out.brl);
    out.det = getDetails(_params[1], out.brl);
  }

  return out;
}

function setSelected( id, arr ){
  const _id = parseInt(id);
  return arr.map( e => {
    return Object.assign({}, e, {
      selected: e.id === _id
    });
  });
}

function getDetails( id, arr ){
  const _id = parseInt(id);
  const _path = arr.find( e => e.id === _id);
  return _path ? JSON.parse(fs.readFileSync(root.resolve('rest/' + _path.href + '.json'))) : undefined;
}

module.exports = generateRulesHydrate;