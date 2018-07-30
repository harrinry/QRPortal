const urlChecker = require('./hrefTester');

const statusChecker = ( status ) => {
  const validValues = ['deprecated', 'added', 'renewed', null];
  return validValues.indexOf( status ) > -1;
};

module.exports = {
  hrefCheck: urlChecker,
  statusCheck: statusChecker
};