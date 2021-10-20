const fs = require('fs');

function readJsonFileSync( filePath, onError ){
  const exsists = fs.existsSync(filePath);

  if (exsists) {
    return JSON.parse(fs.readFileSync(filePath, {encoding: 'utf8'}));
  } else {
    return onError({
      errorCode: 404,
      message: 'File does not exist'
    });
  }
}

module.exports = readJsonFileSync;
