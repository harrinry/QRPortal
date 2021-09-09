/**
 * Get Minimum Weight for Each Version type
 * @param {("lts"|"funcrel"|"beta"|"alpha")} versionType Version Type
 * @returns {number} Minimum Version Weight
 */
function typeMinWeight(versionType){
  switch (versionType) {
  case "lts":
    return 500000000;
  case "funcrel":
    return 300000000;
  case "beta":
    return 200000000;
  case "alpha":
    return 100000000;
  default: 
    return null;
  }
}

module.exports = typeMinWeight;