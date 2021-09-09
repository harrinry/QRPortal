
function daysInMonth(month, year){
  return new Date(year, month, 0).getDate();
}

function daysInCurrentMonth(){
  const today = new Date();

  return daysInMonth(today.getMonth() + 1, today.getFullYear());
}

function daysInRelativeMonth(offset = 0){
  const today = new Date();

  return daysInMonth(today.getMonth() + 1 + offset, today.getFullYear());
}

function monthName(num, i18n = "en"){
  return {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  }[i18n][num];
}

function relativeMonth(offset = 0){
  const today = new Date(Date.now());
  const monthsAgo = new Date();

  monthsAgo.setMonth(today.getMonth() + 1 + offset);
  monthsAgo.setHours(0, 0, 0, 0);
  monthsAgo.setDate(0);

  return monthsAgo;
}

module.exports = {
  daysInMonth,
  daysInCurrentMonth,
  daysInRelativeMonth,
  monthName,
  relativeMonth,
};