
let GRACE_PERIOD = 31;

/**
 * check if customer record is expired
 * @param {Date} date
 * @param {number} maxLife max age in milliseconds
 * @returns {boolean} 
 */
function expired(date, maxLife){
  let expiration;

  if (!date) return true;
  if (maxLife == null || maxLife === undefined) expiration = addGracePeriod(date);
  else expiration = setMaxLife(date, maxLife);

  return new Date() > expiration;
}

function setMaxLife(date, maxLife){
  if (!maxLife) return date;
  const temp = new Date(date);

  temp.setMilliseconds(maxLife);
  return temp;
}

/**
 * add Grace period to customer record check
 * @param {Date} customerDate date
 * @returns {Date} new Date
 */
function addGracePeriod(customerDate){
  const temp = new Date(customerDate);

  return new Date(temp.setDate(customerDate.getDate() + GRACE_PERIOD));
}

/**
 * is customer record currently in grace period
 * @param {Date} customerDate date
 * @returns {boolean}
 */
function inGracePeriod(customerDate){
  if (!customerDate) return false;
  if (new Date() < customerDate) return false;
  if (new Date() < addGracePeriod(customerDate)) return true;
  return false;
}

function setGracePeriod(days){
  GRACE_PERIOD = days;
  return;
}

function getGracePeriod(){
  return GRACE_PERIOD;
}

module.exports = {
  expired,
  addGracePeriod,
  inGracePeriod,
  setGracePeriod,
  getGracePeriod,
};