const urlChecker = require('./hrefTester');

const statusChecker = ( status ) => {
  const validValues = ['deprecated', 'added', 'renewed', null];
  return validValues.indexOf( status ) > -1 ? true : false;
};

const duplicateCheck = ( arr ) => {
  const al = arr.length;
  let _r = [];

  for (let i = 0; i < al; i++) {
    const item = arr[i],
      jit = JSON.stringify(item);
    if (_r.indexOf(jit) > -1) {
      return false;
    }
    _r.push(jit);
  }
  return true;
};

module.exports = {
  hrefCheck: urlChecker,
  statusCheck: statusChecker,
  duplicateCheck: duplicateCheck
};