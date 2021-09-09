const tar = require("tar");

/**
 * @param {Object} options options
 * @param {string} options.tar tar file
 * @param {boolean} options.gzip gzip?
 * @param {boolean} options.keep keep exsisting files
 * @param {string} options.cwd current working directory
 * @param {string[]} options.filelist files to add to archive
 * @returns {Promise<void>}
 */
function update(options = {}){
  return tar.u({
    file: options.tar,
    gzip: options.gzip,
    cwd: options.cwd,
  }, options.filelist);
}

module.exports = update;