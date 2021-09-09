const VersionType = require("./version-type-model");
const minWeight = require("./version-type-min-weight");

function Version(semanticVersion){
  if (!semanticVersion) return null;
  const __ID__ = Symbol(semanticVersion);
  const FullVersion = semanticVersion.split("-");
  const PrimaryVersion = FullVersion[0].split(".");

  this.major = isNaN(parseInt(PrimaryVersion[0])) ? 0 : parseInt(PrimaryVersion[0]),
  this.minor = isNaN(parseInt(PrimaryVersion[1])) ? 0 : parseInt(PrimaryVersion[1]),
  this.revision = isNaN(parseInt(PrimaryVersion[2])) ? 0 : parseInt(PrimaryVersion[2]);
  this.fix = isNaN(parseInt(PrimaryVersion[3])) ? undefined : parseInt(PrimaryVersion[3]);
  
  this.type = new VersionType(semanticVersion);

  this.toString = () => `${this.major}.${this.minor}.${this.revision}${this.fix ? `.${this.fix}` : ""}${this.type.type === "lts" ? "" : `-${this.type.toString()}`}`;

  this.getSymbol = () => __ID__;
}

/**
 * is version greater or equal to a version type
 * @param {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")} type
 * @returns {boolean}
 */
Version.prototype.isGreaterOrEqual = function isGreaterOrEqual(type){
  return this.type.isGreaterOrEqual(type);
};

/**
 * is version greater or equal to a version type
 * @param {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")} type
 * @returns {boolean}
 */
Version.prototype.ge = function ge(type){
  return this.getWeight() >= minWeight(type);
};

/**
 * @param {boolean} ignoreType
 * @returns {number}
 */
Version.prototype.getWeight = function getWeight(ignoreType){
  return (this.major * 1000000 + this.minor * 10000 + this.revision * 100 + (this.fix ? this.fix : 0)) + (ignoreType ? 0 : this.type.getWeight());
};

Version.prototype.getWeightString = function getWeightString(){
  return `${this.major.toString().padStart(8, "0")}.${this.minor.toString().padStart(8, "0")}.${this.revision.toString().padStart(8, "0")}.${this.type.getWeightMultiplier()}.${this.type.getRevision().toString().padStart(8, "0")}`;
};

/**
 * @returns {("lts"|"funcrel"|"beta"|"alpha"|"pre-release")}
 */
Version.prototype.getType = function getType(){
  return this.type.getType();
};

/**
 * array representation of version
 * @returns {string|number[]}
 */
Version.prototype.toArray = function toArray(){
  return [ this.major, this.minor, this.revision, this.type.type, this.type.revision === 0 ? null : this.type.revision ].filter(e => e !== null);
};

/**
 * @returns {boolean}
 */
Version.prototype.isPreRelease = function isPreRelease(){
  return this.type.isPreRelease();
};

/**
 * @returns {boolean}
 */
Version.prototype.isStable = function isStable(){
  return this.type.isStable();
};

module.exports = Version;