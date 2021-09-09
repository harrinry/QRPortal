
function isDate(dateString){
  return !dateString 
    ? false 
    : /(\d{4}(-\d{2}){2})/g.test(dateString);
}

function parseDate(dateString){
  return isDate(dateString) 
    ? new Date(dateString)
    : null;
}

module.exports = {
  isDate,
  parseDate,
};