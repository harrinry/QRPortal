const crypto = require("crypto");
const algo = require("./algo");

const PREFIX = "CRYPTED2:";
const BLOCK_SIZE = 16;
const KEY_TEXT = "NaBuCrodorozores";

function ncrypt(data){
  let key = Buffer.from(KEY_TEXT, "utf-8");
  let iv = Buffer.alloc(16).fill(0);
  const cry = crypto.createCipheriv(algo.aes128cbc, key, iv).setAutoPadding(false);
  const padded = getZeroPaddedArray(data);

  return (PREFIX + cry.update(padded, "utf8", "hex") + cry.final("hex")).toString("hex").toUpperCase();
}

function dcrypt(data){
  let key = Buffer.from(KEY_TEXT, "utf-8");
  let iv = Buffer.alloc(16).fill(0);

  const dcry = crypto.createDecipheriv(algo.aes128cbc, key, iv).setAutoPadding(false);
  const encData = stripPrefix(data);

  const dec = dcry.update(encData.toLowerCase(), "hex", "utf8") + dcry.final("utf8");
  const bff = Buffer.from(dec, "utf8").filter(_ => _ !== 0);

  return bff.toString();
}

/**
 * @param {string} text 
 */
function stripPrefix(text){
  if (!text) return null;

  return text.replace(PREFIX, "");
}

function getZeroPaddedArray(text){
  if (!text) return null;
  
  const StringAsUTF8 = Buffer.from(text, "utf8");
  const ln = StringAsUTF8.length / BLOCK_SIZE;
  const alignedLength = Math.ceil(ln) * BLOCK_SIZE;
  const paddedUTF8 = Buffer.alloc(alignedLength);

  StringAsUTF8.copy(paddedUTF8, 0, 0, paddedUTF8.length);

  return paddedUTF8;
}

module.exports = {
  encipher: ncrypt,
  decipher: dcrypt,
};