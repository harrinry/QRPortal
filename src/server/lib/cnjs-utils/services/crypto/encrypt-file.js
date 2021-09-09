const createCypher = require("./create-cypher");
const createCanvasKey = require("./create-canvas-key");
const algo = require("./algo");
const path = require("path");
const fs = require("fs");

async function encryptFile(filePath, output, publicIv){
  const key = await createCanvasKey([path.basename(filePath), path.basename(output)], 32);
  const cry = createCypher(algo.aes256cbc, key, publicIv);

  return new Promise((resolve, reject) => {
    try {
      const rs = fs.createReadStream(filePath);
      const ws = fs.createWriteStream(output);

      cry.on("error", (err) => {
        reject(err);
      });

      ws.on("error", (err) => reject(err));
  
      ws.on("finish", () => resolve());
  
      rs
        .pipe(cry)
        .pipe(ws);

    } catch (err) {
      reject(err);
    }
  });
}

module.exports = encryptFile;