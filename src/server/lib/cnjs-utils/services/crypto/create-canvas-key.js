const hash = require("./create-sha256-hash");

/**
 * @param {string[]} canvasArr 
 */
async function canvasScrambler(canvasArr, length = 32){
  const csum = await hash(canvasArr.join(""));
  const cv = Buffer.from(csum.repeat(length * 4));
  const xorx = canvasArr.length;
  const lasti = cv[xorx] ^ xorx;
  const final = Buffer.alloc(length);

  for (let i = 0; i < length; i++) {
    const offset = lasti * (i + 1);      
    const val = cv.slice(offset, offset + 1);

    final[i] = val[0] ^ xorx;
  }

  return final.toString("hex");
}

module.exports = canvasScrambler;