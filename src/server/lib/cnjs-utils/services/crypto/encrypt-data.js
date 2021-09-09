const createCypher = require("./create-cypher");
const createCanvasKey = require("./create-canvas-key");
const algo = require("./algo");
const bufferStream = require("../../lib/buffer-stream");

/**
 * @param {string} privateKey 
 * @param {string} privateKey2 
 * @param {string} publicIv 
 * @param {Buffer} data 
 * @returns {Promise<Buffer>}
 */
async function encryptData(privateKey, privateKey2, publicIv, data){
  const key = await createCanvasKey([privateKey, privateKey2], 32);
  const cry = createCypher(algo.aes256cbc, key, publicIv);

  return new Promise((resolve, reject) => {
    try {
      const rs = bufferStream.createMemoryReadStream(data);
      const ws = bufferStream.createMemoryWriteStream();

      cry.on("error", (err) => {
        reject(err);
      });

      ws.on("error", (err) => reject(err));
  
      ws.on("finish", () => resolve(ws.getChunks()));

      rs
        .pipe(cry)
        .pipe(ws);

    } catch (err) {
      reject(err);
    }
  });
}

module.exports = encryptData;