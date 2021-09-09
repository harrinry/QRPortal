const os = require("os");

class WebClientError extends Error {
  constructor(message, httpStatus, body){
    // Calling parent constructor of base Error class.
    super(message);
    
    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;
    this.statusCode = httpStatus;
    this.body = body;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    this.msg = message;
    this.trace = this.stack.split("\n");
    this.message = this.toString();
  }

  toString(){
    return this.trace.join(os.EOL);
  }
}

module.exports = WebClientError;