const fs = require('fs');
const path = require('path');

function readJsonFile( filePath, onFileContent, onComplete, onError ){
  fs.readFile( path.resolve(filePath), 'utf8', ( err, fileContents ) => {
    if ( err ) {
      onError( err );
      return;
    }
    onFileContent( filePath, JSON.parse(fileContents), onComplete );
  });
}

module.exports = readJsonFile;