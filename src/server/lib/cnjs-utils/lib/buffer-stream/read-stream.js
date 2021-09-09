const { PassThrough } = require("stream");

class MemoryReadStream extends PassThrough {

  /**
   * @param {Buffer} data 
   * @param {import("stream").TransformOptions} options 
   */
  constructor(data, options){
    super(options);

    this.end(data);
  }
}

/**
 * @param {Buffer} data 
 * @param {import("stream").TransformOptions} options 
 */
function createMemoryReadStream(data, options) {
  return new MemoryReadStream(data, options);
}


module.exports = {
  MemoryReadStream,
  createMemoryReadStream,
};