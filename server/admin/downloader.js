const AdmZip = require('adm-zip');
const rootPath = require('app-root-path');
const fs = require('fs');

function logFileDownloader( res, filter ){
  
  fs.readdir(rootPath.resolve('logs').toString(), (e, files) =>{
    if (e) {
      console.log(e);
      return;
    }

    let zip = new AdmZip();
    const _name = Date.now();
    const len = files.length;
    for (let i = 0; i < len; i++) {
      const fileName = files[i];
      if (filter && inArray(filter, fileName)) {
        zip.addLocalFile(rootPath.resolve('logs/'+ fileName));
      } else if( !filter ) {
        zip.addLocalFile(rootPath.resolve('logs/'+ fileName));
      }
    }

    const tempZipPath = rootPath.resolve('temp/'+ _name +'.zip' ).toString();

    zip.writeZip(tempZipPath);
    res.download(tempZipPath);
    
    setTimeout( () => fs.unlink(tempZipPath, (err) => {
      if (err) {
        console.log(err);
      }
    }), 30000);
    
  });
}

function inArray( arr, item ){
  return arr.indexOf( item ) > -1 ? true : false;
}

module.exports = logFileDownloader;