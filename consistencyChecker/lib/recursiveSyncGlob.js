const fs = require('fs');
const path = require('path');

function globSync( dirName, onContent ){
  const files = fs.readdirSync(dirName, {encoding: 'utf8'}),
    len = files.length;

  for (let i = 0; i < len; i++) {
    const fileName = files[i];
    const PATH = path.join(dirName, fileName);
    const stats = fs.statSync(PATH);
    if (stats.isFile()) {
      const fileContent = fs.readFileSync(PATH, {encoding: 'utf8'});
      onContent( PATH, fileName, fileContent);
    } else {
      globSync( PATH, onContent );
    }
  }
}

module.exports = globSync;