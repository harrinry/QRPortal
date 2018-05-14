const fs = require('fs');

function readJsonFile( filePath, onFileContent, onComplete, onError ){
  fs.readFile( filePath, 'utf8', ( err, fileContents ) => {
    if ( err ) {
      onError( err );
      return;
    }
    onFileContent( filePath, JSON.parse(fileContents), onComplete );
  });
}

module.exports = readJsonFile;