const fs = require('fs');
const root = require('app-root-path');

function getQualityStandardsMap ( response ){
  fs.readFile(root.resolve('rest/AIP/quality-standards.json'), ( err, data ) => {
    if (err) {
      console.log(err);
    }
    const businessCriteria = {
      name: 'CAST',
      href: 'AIP/business-criteria'
    };
    const ret = JSON.parse(data).filter( e => e.name === 'CISQ' || e.name === 'OWASP').map( e => {
      return {
        name: e.name,
        href: e.href + '/categories'
      };
    });

    response.json([businessCriteria, ...ret]);
  });
}

module.exports = getQualityStandardsMap;