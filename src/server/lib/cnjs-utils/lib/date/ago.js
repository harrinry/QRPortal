
function daysAgo(numberOfDays){
  const today = new Date(Date.now());
  const newDate = new Date();

  newDate.setDate(today.getDate() - numberOfDays);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
}

module.exports = daysAgo;