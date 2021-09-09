const winston = require("winston");

class ConsoleTransport extends winston.transports.Console{
  /**
   * @param {import("./transport").ConsoleTransportOptions} options 
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

module.exports = exports = ConsoleTransport;