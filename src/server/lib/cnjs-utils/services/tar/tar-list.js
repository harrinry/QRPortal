const tar = require("tar");
const fs = require("fs");

/**
 * read tar entries
 * @param {string} tarFile
 * @param {Function} cb
 * @returns {Promise<string[]>}
 */
function list(tarFile){
  return new Promise((resolve, reject)=>{
    const output = [];

    fs.createReadStream(tarFile)
      .pipe(tar.t())
      .on("entry", entry => output.push(entry))
      .on("error", err => reject(err))
      .on("close", () => resolve(output));
  });
}

module.exports = list;