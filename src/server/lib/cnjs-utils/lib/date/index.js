const expired = require("./date-expired");

module.exports = {
  gracePeriod: {
    add: expired.addGracePeriod,
    in: expired.inGracePeriod,
    get: expired.getGracePeriod,
    set: expired.setGracePeriod,
  },
  isExpired: expired.expired,
  tomorrow: require("./tomorrow"),
  now: require("./now"),
  daysAgo: require("./ago"),
  ...require("./month"),
  ...require("./isDate"),
};