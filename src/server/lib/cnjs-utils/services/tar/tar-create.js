const tar = require("tar");
const fs = require("fs");

/**
 * create tar archive
 * @param {string[]} files 
 * @param {string} output 
 * @param {Object} options
 * @param {boolean} options.gzip
 * @param {string} options.root
 * @returns {Promise<void>}
 */
function create(files, output, options){
  return new Promise((resolve, reject) => {
    try {
      const ws = fs.createWriteStream(output);
    
      ws.on("error", (err) => reject(err));
  
      ws.on("finish", () => resolve());
  
      tar.c({
        gzip: options.gzip,
        cwd: options.root,
      }, 
      files).pipe(ws);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = create;
