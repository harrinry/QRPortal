const tar = require("tar");
const fs = require("fs");

/**
 * extract tar file content
 * @param {Object} options options
 * @param {string} options.tar tar file
 * @param {string} options.dest extract destination
 * @param {boolean} options.keep keep exsisting files
 * @param {(path: string, stat: FileStat) => boolean} options.filter
 * @param {string[]} fileList
 * @returns {Promise<void>}
 */
function extract(options = {}, fileList){

  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(options.tar);
    const ws = tar.x({
      C: options.dest,
      "keep-existing": options.keep,
      filter: options.filter,
      onwarn(err){
        return reject(err);
      },
    }, fileList);

    rs.on("error", err => reject(err));
    ws.on("error", err => reject(err));

    ws.on("close", () => resolve());

    try {
      rs.pipe(ws);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = extract;