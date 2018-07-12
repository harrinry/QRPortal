const fs = require('fs');
const root = require('app-root-path');

function getTemplates(){
  const PATH = root.resolve('consistencyChecker/templates');
  const templateFiles = fs.readdirSync(PATH, {encoding: 'utf8'});
  return templateFiles.map( fileName => require(PATH.toString() + '/' + fileName));
}

const TEMPS = getTemplates();

function matchTemplate( url ){
  for (let i = 0; i < TEMPS.length; i++) {
    const identifier = TEMPS[i].identifier;
    if (identifier.test( url )) {
      return TEMPS[i];
    }
  }
}

module.exports = matchTemplate;