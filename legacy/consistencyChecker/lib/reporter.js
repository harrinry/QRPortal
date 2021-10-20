const Reporter = require('./reportObject');
let reporters = {};

function createReporter ( outfile ){
  reporters[outfile] = new Reporter( outfile );
}

function generateReports(){
  for (const rep in reporters) {
    const _re = reporters[rep];
    _re.generateReport();
  }
}

function getReporter( filePath ){
  if (!reporters[filePath]) {
    createReporter( filePath );
  }
  return reporters[filePath];
}

module.exports = {
  generateReports: generateReports,
  getReporter: getReporter
};