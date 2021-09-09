const winston = require("winston");

class FileTransport extends winston.transports.File{
  /**
   * @param {import("./transport").FileTransportOptions} options 
   */
  constructor(options){
    super(options);

    this.strict = options.strict;
  }

  log(info, callback){
    if (this.strict && info.level === this.level){
      super.log(info, callback);
    } else if (!this.strict){
      super.log(info, callback);
    }
  }
}

module.exports = exports = FileTransport;