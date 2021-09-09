const crypto = require("crypto");

function destructCypher(algo, ekey, eiv){
  let key = Buffer.alloc(32);
  let iv = Buffer.alloc(16);

  key = Buffer.from(ekey, "hex");
  iv = Buffer.from(eiv, "hex");
  return crypto.createDecipheriv(algo, key, iv);
}

module.exports = destructCypher;