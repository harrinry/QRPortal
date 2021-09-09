const semver = require("semver");
const Version = require("./version-model");

/**
 * Create a new Version Vector
 */
function VersionVector(...versions){
  let __versions = [];

  this.list = () => [...__versions];

  this.__sort__ = (sortFunc) => __versions.sort(sortFunc);

  this.get = (ver) => {
    const type = this.is(ver);
    let val;

    switch (type) {
    case "String":
      val = __versions.find(e => e.toString() === ver);
      break;
    case "weight":
      val = __versions.find(e => e.getWeight() === ver);
      break;
    case "version":
      val = __versions.find(e => e === ver);
      break;
    default:
      val = null;
      break;
    }

    return val;
  };

  this.remove = (ver) => {
    const __version = this.get(ver);
    const idx = __versions.indexOf(__version);

    if (!__version) return false;

    __versions.splice(idx, 1);
    return true;
  };

  /**
   * Add a new version to Vector
   * @param  {...string|Version} version versions in semantic version format or versionWeight
   */
  this.add = (...version) => {
    let l = version.length;

    for (let i = 0; i < l; i++) {
      const ver = version[i];

      if (this.has(ver)) continue; 
      switch (this.is(ver)) {
      case "String":
        __versions.push(new Version(ver));
        break;
      case "version":
        __versions.push(ver);
        break;
      default:
        return false;
      }
    }
    return true;
  };
  
  this.add(...versions);
}


VersionVector.prototype.has = function has(ver){
  return !!this.get(ver);
};

/**
 * Sort Vector Contains according to options
 * @param {string=descending} order Sort order ("descending"|"ascending") defaults to descending
 * @param {boolean} mutate mutate current vector ordering instead of returning a new array
 * @returns {Version[]} SortedArray
 */
VersionVector.prototype.sort = function sort(order = "descending", mutate = false){

  if (mutate){
    this.__sort__((a, b) => {
      if (order.toLowerCase() === "descending" || order.toLowerCase() === "desc") {
        if (semver.lt(a.toString(), b.toString())) return 1;
        if (semver.gt(a.toString(), b.toString())) return -1;
        if (semver.eq(a.toString(), b.toString())) return 0;
      } else if (order.toLowerCase() === "ascending" || order.toLowerCase() === "asc") {
        if (semver.gt(a.toString(), b.toString())) return 1;
        if (semver.lt(a.toString(), b.toString())) return -1;
        if (semver.eq(a.toString(), b.toString())) return 0;
      }
    });
    return;
  }

  const _versions = this.list();

  _versions.sort((a, b) => {
    if (order.toLowerCase() === "descending" || order.toLowerCase() === "desc") {
      if (semver.lt(a.toString(), b.toString())) return 1;
      if (semver.gt(a.toString(), b.toString())) return -1;
      if (semver.eq(a.toString(), b.toString())) return 0;
    } else if (order.toLowerCase() === "ascending" || order.toLowerCase() === "asc") {
      if (semver.gt(a.toString(), b.toString())) return 1;
      if (semver.lt(a.toString(), b.toString())) return -1;
      if (semver.eq(a.toString(), b.toString())) return 0;
    }
  });
    
  return _versions;

};

VersionVector.prototype.is = function is(version) {
  if (typeof version === "string") {
    return "String";
  } else if (typeof version === "number"){
    return "weight";
  } else if (version instanceof Version) {
    return "version";
  } else return null;
};

/**
 * Sort Vector Contains according to options
 * @param {string|Version} version Sort Options
 * @param {string=Version} criteria Criteria on which to evaluate ("version"|"weight") defaults to Version
 * @returns {number} Evaluated Index
 */
VersionVector.prototype.evaluate = function evaluate(ver){
  const vers = ver instanceof Version ? ver : new Version(ver);

  return new VersionVector(...this.list(), vers)
    .sort("descending", false)
    .findIndex(e => e.getSymbol() === vers.getSymbol());
};

VersionVector.prototype.getLatest = function getLatest(){
  const sArr = this.sort();

  return sArr[0];
};

VersionVector.prototype.getLatestStable = function getLatestStable(){
  const sArr = this.sort();

  return sArr.find(e => e.isStable());
};

VersionVector.prototype.getLatestAlpha = function getLatestStable(){
  const sArr = this.sort();

  return sArr.find(e => e.getType() === "alpha");
};

VersionVector.prototype.getLatestBeta = function getLatestStable(){
  const sArr = this.sort();

  return sArr.find(e => e.getType() === "beta");
};

VersionVector.prototype.getLatestFuncrel = function getLatestStable(){
  const sArr = this.sort();

  return sArr.find(e => e.getType() === "funcrel");
};

module.exports = VersionVector;