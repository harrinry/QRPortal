const fs = require('fs');
const root = require('path');
const techMap = require('../../lib/technologies-map');
const UNIQ = require('../../lib/uniq');
const readJsonSync = require('../../lib/readJsonSync');
const normalize = require('../../lib/normalize');

function generateRulesHydrate( params, path ){
  const _params = params.split('|'),
    pl = path.length;
  let out = {};

  if (_params[2] !== '') {
    const versions = path[2];
    out.cmp = versions.find( v => v.name === _params[2] );
    const _path = out.cmp ? root.resolve('rest/' + out.cmp.href + '/quality-rules.json') : '';
    out.brl = fs.existsSync(_path) ? JSON.parse(fs.readFileSync(_path)) : [];
  }

  if (_params[0] !== '') {
    if (path.length > 0){
      const std = path[pl -1],
        stdPath = std ? root.resolve('rest/' + std.href + '/items.json') : '',
        data = fs.existsSync(stdPath) ? JSON.parse(fs.readFileSync(stdPath)) : null,
        sel = data ? data.find( e => e.id === _params[0]) : undefined,
        _path = sel ? root.resolve('rest/' + sel.href + '/quality-rules.json') : '';
      out.bsl = setSelected(_params[0], data);
      out.brl =  fs.existsSync(_path) ? JSON.parse(fs.readFileSync(_path)) : [];
    }
  }

  if( _params[0] === '' && _params[2] === '' ){
    switch (path[0].name) {
    case 'Technologies':{
      const id = parseInt(path[1].id),
        tech = techMap.find( e => e.id === id ),
        isMultiQ = /\+/gi.test(tech.href);
      out.brl = isMultiQ ? syncConcatQueries(...splitOnPlus(tech.href)) : readJsonSync(root.resolve('rest/' + normalize(tech.href)), () => []);
      break;
    } 
    case 'Standards':{
      const isBC = path[1].name.toLowerCase() === 'cast' ? true : false,
        dir = isBC ? 'brl' : 'bsl',
        _path = isBC ? root.resolve('rest/'.concat(path[2].href, '/quality-rules.json')) : root.resolve('rest/'.concat(path[2].href, '/items.json'));
      out[dir] = fs.existsSync(_path) ? JSON.parse(fs.readFileSync(_path)) : [];
      break;
    }
    }
  }

  if ( _params[1] !== '' ){
    out.brl = setSelected(_params[1], out.brl);
    out.det = getDetails(_params[1], out.brl);
  }

  return out;
}

function setSelected( id, arr ){
  if(!Array.isArray(arr)) return [];
  const _id = isNaN(parseInt(id)) ? id : parseInt(id);
  return arr.map( e => {
    return Object.assign({}, e, {
      selected: e.id === _id
    });
  });
}

function getDetails( id, arr ){
  if(!Array.isArray(arr)) return [];
  const _id = parseInt(id);
  const _path = arr.find( e => e.id === _id);
  return _path ? JSON.parse(fs.readFileSync(root.resolve('rest/' + _path.href + '.json'))) : {};
}

function splitOnPlus(str){
  return str.split(/\+/ig);
}

function syncConcatQueries( ...urls ){
  let ret = [];
  const ul = urls.length,
    dirPre = 'rest/';

  for (let i = 0; i < ul; i++) {
    const url = normalize(urls[i]),
      _path = root.resolve(dirPre + url);
    ret.push(...readJsonSync(_path, () => []));
  }

  return UNIQ(ret, (val) => val.id);
}

module.exports = generateRulesHydrate;