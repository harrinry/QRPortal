
function createIv(){
  return Buffer.from(
    Array.prototype.map.call(
      Buffer.alloc(16), 
      () => Math.floor(Math.random() * 256)
    )
  );
}

module.exports = createIv;