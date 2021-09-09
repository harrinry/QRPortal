
class HttpErrorFactory{

  constructor( errorCodes = {} ){
    this.msgRegistry = new MessageRegistry(errorCodes);
  }

  registerErrCode( errorCode, msg ){
    this.msgRegistry.register(errorCode, msg);
    return this;
  }

  createError( errorCode, ...args ){
    return {
      arguments: args,
      code: errorCode,
      message: this.msgRegistry.generateMessage(errorCode, ...args),
    };
  }

  createErrorStack(){
    return new ErrorStack(this.msgRegistry);
  }
}

class ErrorStack{
  constructor( messageRegistry ){
    this.msgRegistry = messageRegistry;
    this.stack = [];
  }

  isEmpty(){
    return this.stack.length === 0;
  }

  addError( errorCode, ...args ){
    this.stack.push({
      arguments: args,
      code: errorCode,
      message: this.msgRegistry.generateMessage(errorCode, ...args),
    });

    return this;
  }

  flush(){
    const list = this.stack;
    this.stack = [];
    
    return list;
  }

}

class MessageRegistry{
  constructor(errorCodes = {}){
    this.errorCodes = {
      ...errorCodes,
    };
  }

  register( errorCode, message ){
    this.errorCodes[errorCode] = message;
  }

  generateMessage( errorCode, ...args ){
    const message = this.errorCodes[errorCode];

    if(!message) return "";

    return this.replaceIdentifiers(message, ...args);
  }

  replaceIdentifiers( str, ...args ){
    const r = /{(\d+)}/g;
    return str.replace( r, ( match, num ) => {
      return args[num] !== undefined || args[num] !== null 
        ? args[num]
        : match;
    });
  }
}

module.exports = {
  MessageRegistry,
  HttpErrorFactory,
  ErrorStack,
};