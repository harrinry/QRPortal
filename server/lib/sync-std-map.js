const fs = require('fs');
const root = require('app-root-path');

const data = fs.readFileSync(root.resolve('rest/AIP/quality-standards.json')),   
  businessCriteria = {
    name: 'CAST',
    href: 'AIP/business-criteria',
    icon: 'img/castsoftware.svg'
  },
  ret = JSON.parse(data).filter( e => e.name === 'CISQ' || e.name === 'OWASP').map( e => {
    return {
      name: e.name,
      href: e.href + '/categories',
      icon: 'img/'+ e.name.toLowerCase() +'.svg'
    };
  });

const map = [businessCriteria, ...ret];


module.exports = map;