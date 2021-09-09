const crypto = require("crypto");

/**
 * Create Checksum Synchronously
 * @param {string} str data for chekcsum generation
 * @param {string} hType hashing algorithm
 */
function createChecksumSync(str, hType){
  return crypto
    .createHash(hType)
    .update(str, "utf8")
    .digest("hex");
}

module.exports = createChecksumSync;