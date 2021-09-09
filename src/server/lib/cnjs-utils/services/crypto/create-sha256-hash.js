const crypto = require("crypto");
const algo = require("./algo");
const { v4: uuid } = require("uuid");

/**
 * generate SHA256 Hash
 * @param {string} data data to hash
 * @returns {Promise<string>} SHA256 Hash
 */
function createSha256Hash(data){
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(algo.sha256);

    hash.on("error", (e) => reject(e));

    hash.on("readable", () => {
      const data = hash.read();

      if (data) resolve(data.toString("hex"));
    });

    hash.write(data || uuid());
    hash.end();
  });
}

module.exports = createSha256Hash;