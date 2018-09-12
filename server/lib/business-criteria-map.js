const fs = require('fs');
const root = require('app-root-path');

function getQualityStandardsMap ( response ){
  fs.readFile(root.resolve('rest/AIP/business-criteria.json'), ( err, data ) => {
    if (err) {
      console.log(err);
    }
    const ret = JSON.parse(data).map( e => {
      return Object.assign( {}, e, {icon: 'img/' + e.name.toLowerCase() + '.svg'} );
    });

    response.json(ret);
  });
}

module.exports = getQualityStandardsMap;