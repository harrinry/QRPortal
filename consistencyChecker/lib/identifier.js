const fs = require('fs');
const root = require('app-root-path');

function getTemplates(){
  const PATH = root.resolve('consistencyChecker/templates');
  const templateFiles = fs.readdirSync(PATH, {encoding: 'utf8'});
  return templateFiles.map( fileName => require(PATH.toString() + '/' + fileName));
}

function matchTemplate( url ){
  const templates = getTemplates(),
    len = templates.length;

  for (let i = 0; i < len; i++) {
    const identifier = templates[i].identifier;
    if (identifier.test( url )) {
      return templates[i];
    }
  }
}

module.exports = matchTemplate;