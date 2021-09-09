const DailyRotateFile = require("winston-daily-rotate-file");

class DailyRotateFileTransport extends DailyRotateFile {
  /**
   * @param {import("./transport").DailyRotateFileTransportOptions} options 
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

module.exports = exports = DailyRotateFileTransport;