const path = require("path");

/**
 * @typedef DataAccessOptions
 * @property {string} host
 * @property {string} name
 * @property {number} port
 * @property {string} user
 * @property {string} password
 * @property {string} dialect
 * @property {boolean} ssl
 * @property {string} storage
 * @property {string} schema
 */

class DataAccessConfiguration {

  /**
   * @param {DataAccessOptions} opts 
   */
  constructor( opts ){
    this.host = opts.host;
    this.name = opts.name;
    this.port = opts.port;
    this.user = opts.user;
    this.password = opts.password;
    this.dialect = opts.dialect;
    this.ssl = opts.ssl;
    this.schema = opts.schema;

    this.storage = this.isSQLite() ? path.join( opts.storage, opts.name ) : null;
  }

  /**
   * @param {string} type 
   */
  isSQLite(){
    return this.dialect === "sqlite";
  }

}

module.exports = {
  DataAccessConfiguration
};