const { Writable } = require("stream");

class MemoryWriteStream extends Writable{

  /**
   * @param {import("stream").WritableOptions} options 
   */
  constructor(options){
    super(options);

    this.chunks = [];
  }

  /**
   * @param {string|Buffer} chunk 
   * @param {string} enc 
   * @param {Function} cb 
   */
  _write(chunk, _enc, cb){
    const buff = (Buffer.isBuffer(chunk))
      ? chunk
      : Buffer.from(chunk);

    this.chunks.push(buff);
    if (cb) cb();
  }

  getChunks(){
    return Buffer.concat(this.chunks);
  }
}

/**
 * @param {import("stream").WritableOptions} options 
 */
function createMemoryWriteStream(options) {
  return new MemoryWriteStream(options);
}

module.exports = {
  MemoryWriteStream,
  createMemoryWriteStream,
};