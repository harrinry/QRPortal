const fs = require('fs');
const root = require('app-root-path');

function getQualityStandardsMap ( response, sync = false ){
  if (sync) {
    const file = fs.readFileSync(root.resolve('rest/AIP/business-criteria.json')),
      data = JSON.parse(file),
      map = data.map( e => {
        return Object.assign( {}, e, {icon: 'img/' + e.name.toLowerCase().replace(/\s/, '') + '.svg'} );
      });
    return map;
  } 
  fs.readFile(root.resolve('rest/AIP/business-criteria.json'), ( err, data ) => {
    if (err) {
      console.log(err);
    }
    const ret = JSON.parse(data).map( e => {
      return Object.assign( {}, e, {icon: 'img/' + e.name.toLowerCase().replace(/\s/, '') + '.svg'} );
    });

    response.json(ret);
  });
}

module.exports = getQualityStandardsMap;
