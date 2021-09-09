const destructCypher = require("./destruct-cypher");
const createCanvasKey = require("./create-canvas-key");
const algo = require("./algo");
const path = require("path");
const fs = require("fs");

async function decryptFile(filePath, output, iv){
  const key = await createCanvasKey([path.basename(output), path.basename(filePath)], 32);
  const cry = destructCypher(algo.aes256cbc, key, iv);

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

module.exports = decryptFile;