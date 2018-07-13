const { writeFileSync } = require('fs');
const root = require('app-root-path');
const struct = require('../../server/lib/dataConstruct/struct');
const ERROR = new struct('type', 'index', 'description');

function newError( type, index = null, desc ){
  return new ERROR( type, index, desc );
}

function Reporter( outputFile ){
  this.outputPath = root.resolve('consistencyChecker/reports/'+outputFile+'-'+ Date.now()+'.json');
  this.FILES = {};
}

Reporter.prototype = {
  report: function( file, err ){
    const assigned = this.FILES.hasOwnProperty(file);
    let _file = assigned ? this.FILES[file] : {path: file, errors: [] };
    const { type, index, msg } = err;

    _file.errors.push(newError(type, index, msg));
    if( !assigned ) this.FILES[file] = _file;
  },
  generateReport: function (){
    const files = Object.values(this.FILES);
    writeFileSync(this.outputPath, JSON.stringify( files, null, 2 ), {encoding: 'utf8'});
  }
};

module.exports = Reporter;