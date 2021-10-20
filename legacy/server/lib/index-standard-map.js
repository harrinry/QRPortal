const fs = require('fs');
const root = require('app-root-path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readJson = async filePath => {
  try {
    const buff = await readFile(filePath);
    return JSON.parse(buff.toString());
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    return null;
  }
}; 

async function generateBusinessCriteriaMapping(standardName, filterFunc = () => true, type = 'AIP'){
  const businessCritera = await readJson(root.resolve(`rest/${type}/business-criteria.json`));

  if(!businessCritera) return [];

  return businessCritera
    .filter(filterFunc)
    .map( e => {
      return Object.assign( {}, e, {
        standard: standardName || 'CAST',
        icon: 'img/' + e.name.toLowerCase().replace(/\s/, '') + '.svg'
      });
    });
}

module.exports = generateBusinessCriteriaMapping;