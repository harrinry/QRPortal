const { versionType } = require("./version-type");

/**
 * version type constructor
 * @param {string} version version
 */
function VersionType(version) {
  this.weightMultiplier;
  this.type;
  this.revision = 0;
  let intRevision;
  let split = version.split("-");

  switch (versionType(version)) {
  case "lts":
    this.weightMultiplier = 5;
    this.type = "lts";
    break;
  case "funcrel":
    intRevision = parseInt(split[1].substring(7));
    this.weightMultiplier = 3;
    this.type = "funcrel";
    this.revision = isNaN(intRevision) ? 0 : intRevision;
    break;
  case "beta":
    intRevision = parseInt(split[1].substring(4));
    this.weightMultiplier = 2;
    this.type = "beta";
    this.revision = isNaN(intRevision) ? 0 : intRevision;
    break;
  case "alpha":
    intRevision = parseInt(split[1].substring(5));
    this.weightMultiplier = 1;
    this.type = "alpha";
    this.revision = isNaN(intRevision) ? 0 : intRevision;
    break;
  default:
    this.weightMultiplier = 0;
    this.type = "pre-release";
    this.revision = 0;
    break;
  }
}

/**
 * @returns {number} version revision
 */
VersionType.prototype.getRevision = function getRevision(){
  return this.revision;
};

/**
 * @returns {number} version type weight
 */
VersionType.prototype.getWeight = function getWeight(){
  return this.weightMultiplier * 100000000 + this.revision;
};

/**
 * @returns {number} version type weight
 */
VersionType.prototype.getWeightMultiplier = function getWeightMultiplier(){
  return this.weightMultiplier;
};

/**
 * @returns {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")} version type
 */
VersionType.prototype.getType = function getType(){
  return this.type;
};

/**
 * @returns {string} version type as string
 */
VersionType.prototype.toString = function toString(){
  return this.type !== "lts" ? `${this.type}${this.revision > 0 ? this.revision : ""}` : "";
};

/**
 * @returns {boolean}
 */
VersionType.prototype.isPreRelease = function isPreRelease(){
  return this.type !== "lts";
};

/**
 * @returns {boolean}
 */
VersionType.prototype.isStable = function isStable(){
  return this.type === "lts";
};


/**
 * @param {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")} type version type
 * @returns {boolean}
 */
VersionType.prototype.isGreaterOrEqual = function isGreaterOrEqual(type){

  switch (type.toLowerCase()) {
  case "lts":
    return this.type === "lts";
  case "funcrel":
    return !!((this.type === "funcrel" || this.type === "lts"));
  case "beta":
    return !!((this.type === "funcrel" || this.type === "lts" || this.type === "beta"));
  case "alpha":
    return !!this.type;
  default:
    return false;
  }
};

module.exports = VersionType;