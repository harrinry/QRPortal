const crypto = require("crypto");

function createCypher(algo, ekey, eiv){
  let key = Buffer.alloc(32); // key should be 32 bytes
  let iv = Buffer.alloc(16);  // iv should be 16

  key = Buffer.concat([Buffer.from(ekey, "hex")], key.length);
  iv = Buffer.from(eiv, "hex");
  
  return crypto.createCipheriv(algo, key, iv);
}

module.exports = createCypher;