const fs = require('fs');
const root = require('app-root-path');

const data = fs.readFileSync(root.resolve('rest/AIP/quality-standards.json')),   
  businessCriteria = {
    name: 'Health Factors',
    href: 'AIP/business-criteria',
    icon: 'img/castsoftwareblackbg.svg',
  },
  ret = JSON.parse(data).filter( e => e.name !== 'AIP').map( e => {
    return {
      name: e.name,
      href: e.href + '/categories',
      icon: 'img/'+ e.name.toLowerCase() +'.svg'
    };
  });

const map = [businessCriteria, ...ret];


module.exports = map;