const minWeight = require("./version-type-min-weight");

/**
 * @param {string} str string to search
 * @param {string} val search value
 * @param {object} opts options
 * @param {boolean} opts.ignoreCase case insensitive search
 * @returns {boolean} Boolean
 */
function stringContains(str, val, opts = { ignoreCase: false }){
  if (!str || !val) return false;
  let ret;

  if (opts.ignoreCase)ret = str.toLowerCase().indexOf(val.toLowerCase()); 
  else ret = str.indexOf(val);
  return ret !== -1 ;
}


/**
 * Evalutate Type Based on Weight
 * @param {number|string} version Evaluated Version Weight
 * @returns {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")} VersionType
 */
function versionType(version){
  if (typeof version === "string") return isStable(version) ? "lts" : preReleaseType(version.toLowerCase());
  return isStable(version) ? "lts" : preReleaseType(version);
}

/**
 * Evalutate Type
 * @param {number|string} version Evaluated Version Weight
 * @returns {boolean} Boolean
 */
function isFuncrel(version){
  if (typeof version === "string") return stringContains(version, "funcrel");
  return version >= minWeight("funcrel") && version < minWeight("lts");
}

/**
 * Evalutate Type
 * @param {number|string} version Evaluated Version Weight
 * @returns {boolean} Boolean
 */
function isBeta(version){
  if (typeof version === "string") return stringContains(version, "beta");
  return version >= minWeight("beta") && version < minWeight("funcrel");
}

/**
 * Evalutate Type
 * @param {number|string} version Evaluated Version Weight
 * @returns {boolean} Boolean
 */
function isAlpha(version){
  if (typeof version === "string") return stringContains(version, "alpha");
  return version >= minWeight("alpha") && version < minWeight("beta");
}

/**
 * Evalutate Type
 * @param {number|string} version Evaluated Version Weight
 * @returns {boolean} Boolean
 */
function isStable(version){
  if (typeof version === "string") return !stringContains(version, "-");
  return version >= minWeight("lts");
}

/**
 * Evalutate Type
 * @param {number|string} version Evaluated Version Weight
 * @returns {boolean} Boolean
 */
function isPreRelease(version){
  if (typeof version === "string") return stringContains(version, "-");
  return version < minWeight("lts");
}

function preReleaseType(version){
  if (isFuncrel(version)) return "funcrel";
  if (isBeta(version)) return "beta";
  if (isAlpha(version)) return "alpha";
  return "pre-release";
}

function compareType(version) {
  const verType = versionType(version);

  return {
    gte(type){
      switch (verType) {
      case "lts":
        return !!(type === "lts" || type === "funcrel" || type === "funcrel" || type === "beta" || type === "alpha");
      case "funcrel":
        return !!(type === "funcrel" || type === "beta" || type === "alpha");
      case "beta":
        return !!(type === "beta" || type === "alpha");
      case "alpha":
        return type === "alpha";
      default:
        return false;
      }
    },
    lte(type){
      switch (verType) {
      case "lts":
        return type === "lts";
      case "funcrel":
        return !!(type === "funcrel" || type === "lts");
      case "beta":
        return !!(type === "beta" || type === "funcrel" || type === "lts");
      case "alpha":
        return !!(type === "alpha" || type === "beta" || type === "funcrel" || type === "lts");
      default:
        return false;
      }
    },
  };
}

module.exports = {
  isStable,
  isPreRelease,
  isAlpha,
  isBeta,
  isFuncrel,
  versionType,
  compareType,
};