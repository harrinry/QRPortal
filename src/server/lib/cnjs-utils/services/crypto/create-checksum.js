const fs = require("fs");
const crypto = require("crypto");

/**
 * generate checksum
 * @param {string} filePath filepath
 * @param {string} algo hashing algorithm
 * @returns {Promise<string>} checksum
 */
function createChecksum(filePath, algo){
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err){
        reject(err);
      }
      
      if (stats.isFile()){
        const hash = crypto.createHash(algo);
        const stream = fs.createReadStream(filePath, { encoding: "utf8" });

        stream.on("error", (err) => reject(err));

        stream.on("data", (chunk) => {
          hash.update(chunk, "utf8");
        });

        stream.on("end", () => {
          resolve(hash.digest("hex"));
        });
      } else {
        reject({
          message: "target is not a file",
        });
      }
    });
  });
}

module.exports = createChecksum;