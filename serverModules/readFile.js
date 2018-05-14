const fs = require('fs');
const path = require('path');
const baseDir = path.basename('../');

module.exports = function readJsonFile( path, onFileContent, onError ){
  fs.readFile( path.join( baseDir, path ), 'utf8', ( err, fileContents ) => {
    if ( err ) {
      onError( err );
      return;
    }
    onFileContent( path, JSON.parse(fileContents) );
  });
};
  