const fs = require('fs');
const root = require('app-root-path');

function ensureLogDir(){
  fs.stat(root.resolve('logs/'), ( err, stats ) => {
    if (err) {
      fs.mkdir(root.resolve('logs'), err => {
        if(err) {
          return console.log('Logger: configuration Failed');
        } else return console.log('Logger: configuration complete');
      });
      
    } else if(stats.isDirectory()) {
      console.log('Logger: active no configuration required');
    }
  });
}

module.exports = ensureLogDir;