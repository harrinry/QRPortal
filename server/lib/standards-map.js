const fs = require('fs');
const root = require('app-root-path');

const qualityStandardsToFilter = ['AIP', 'PCI-DSS-V3.1'];

function inArray( val, arr ){
  return arr.indexOf( val ) !== -1;
}

function getQualityStandardsMap ( response, echo ){
  fs.readFile(root.resolve('rest/'+ (echo ? 'Echo' :'AIP') +'/quality-standards.json'), ( err, data ) => {
    if (err) {
      console.log(err);
    }
    // const castAip = {
    //   name: 'CAST',
    //   href: 'AIP/quality-standards/AIP/categories',
    //   icon: 'img/castsoftwareblackbg.svg'
    // };
    const ret = JSON.parse(data).filter( e => !inArray(e.name, qualityStandardsToFilter)).map( e => {
      return {
        name: e.name,
        href: e.href + '/categories',
        icon: 'img/'+ e.name.toLowerCase() +'.svg'
      };
    });

    // const out = [ castAip, ...ret ];

    response.json(ret);
  });
}

module.exports = getQualityStandardsMap;
