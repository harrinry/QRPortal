const urlChecker = require('./hrefTester');

const statusChecker = ( status ) => {
  const validValues = ['deprecated', 'added', 'renewed', null];
  return validValues.indexOf( status ) > -1 ? true : false;
};

module.exports = {
  hrefCheck: urlChecker,
  statusCheck: statusChecker
};