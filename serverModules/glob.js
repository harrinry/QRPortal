const fs = require('fs');
const path = require('path');

function Glob( dirName, onFileContent, onError, onComplete ){
  fs.readdir( dirName, ( err, fileNames ) => {
    if( err ){
      onError( err );
      return;
    }
    const len = fileNames.length;
    fileNames.forEach( ( fileName, index ) => {
      fs.readFile( path.join( dirName, fileName ), 'utf8', ( err, fileContents ) => {
        if ( err ) {
          onError( err );
          return;
        }
        onFileContent( fileName, JSON.parse(fileContents) );
        if ( index === len -1 ) onComplete();
      });
    });
  });
}

module.exports = Glob;