const express = require('express');
const root = require('app-root-path');
const { compareOnId } = require('./lib/compare');
const { versionUpgradeDelta } = require('./lib/delta-tool');
const logger = require('../logger/compare');
const fs = require('fs');
const util = require('util');
const path = require('path');
let compareRouter = express.Router();

const sortAndRemoveDeprecated = ( data ) => {
  const noDepricated = data.filter( e => e.status !== 'deprecated');
  return noDepricated.sort((a, b) => a.id - b.id);
};

compareRouter.get('/extensions/:extID/:ver1/:ver2', (req, res) => {
  const params = {
      extID: req.params.extID,
      version1: req.params.ver1,
      version2: req.params.ver2,
      section: 'EXTENSIONS',
      isValid: null
    },
    verPath = ( version ) => root.resolve(`rest/AIP/extensions/${params.extID}/versions/${version}/quality-rules.json`),
    toVerify = [ `rest/AIP/extensions/${params.extID}/`, `rest/AIP/extensions/${params.extID}/versions/${params.version1}/`, `rest/AIP/extensions/${params.extID}/versions/${params.version2}/` ];

  if( params.extID !== 'com.castsoftware.aip' ){
    for (let i = 0; i < 3; i++) {
      const eToVerify = toVerify[i];
      params.isValid = fs.existsSync( eToVerify );
  
      if( !params.isValid ) break;
      
    }
    
    logger.info(params);

    if( params.isValid ) res.json(compareOnId( JSON.parse(fs.readFileSync(verPath(params.version1))), JSON.parse(fs.readFileSync(verPath(params.version2))), params.version1, params.version2, sortAndRemoveDeprecated ));
    else res.sendStatus(404);
  } else {
    const AIPPath = ( version ) => root.resolve(`rest/AIP/versions/${version}/quality-rules.json`);
    res.json(compareOnId( JSON.parse(fs.readFileSync(AIPPath(params.version1))), JSON.parse(fs.readFileSync(AIPPath(params.version2))), params.version1, params.version2, sortAndRemoveDeprecated ));
  }
});

compareRouter.get('/impact/:extId/:ver1/:ver2', async(req, res) => {
  const { extId, ver1, ver2 } = req.params;

  const result = await versionUpgradeDelta(extId, ver1, ver2);

  if(!result) res.sendStatus(400);
  else 
    res.json( result );
});

compareRouter.get('/impact/:id', (req, res) => {
  let { rels } = req.query;
  const { id } = req.params;
  if ( !Array.isArray(rels) ) rels = [ rels ];
  const files = fs.readdirSync(path.join(__dirname, '_rel', id ));
  let result = '';

  for (const ver of rels) {
    const rel = new RegExp(`${id}.${ver}`, 'i');
    const file = files.find( _ => rel.test(_) );
    const data = fs.readFileSync(path.join(__dirname, '_rel', id, file ));
    result += data.toString();
    result += '\n\n';
  }

  res.send(result);

});

compareRouter.use('/', express.static(path.join(__dirname, 'demo')));

// compareRouter.get('/impact', (_req, res) => {
//   util.promisify(fs.readFile)(path.resolve(__dirname, 'demo', 'index.html'))
//     .then( data => res.type('html').send(data));
// });

module.exports = compareRouter;