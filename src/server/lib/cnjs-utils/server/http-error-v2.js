
class HttpErrorFactory{

  constructor(){
    /** @type {Map<string, MessageRegistry>} */
    this.msgRegistries = new Map();
  }

  /**
   * @param {string} registryId 
   * @param {...RegistryError} registryErrors
   */
  registerErrCodes(registryId, ...registryErrors){
    const msgRegistry = this.msgRegistries.get(registryId);

    if (!msgRegistry) {
      this.msgRegistries.set(registryId, new MessageRegistry(registryErrors));
    } else {
      for (const registryError of registryErrors) {
        msgRegistry.register(registryError);
      }
    }

    return this;
  }

  /**
   * @param {string} registryId 
   * @param {string} errorCode 
   * @param {any[]} args 
   */
  createError(registryId, errorCode, args = []){
    const msgRegistry = this.msgRegistries.get(registryId);
    const registryError = msgRegistry.generateError(errorCode, args);

    return new ErrorResponse(registryError.error, registryError.message, registryError.detail);
  }

  /**
   * @param {string} registryId 
   */
  createErrorStack(registryId){
    const msgRegistry = this.msgRegistries.get(registryId);

    return new ErrorStack(msgRegistry, registryId);
  }
}

class ErrorStack{
  
  /**
   * @param {MessageRegistry} messageRegistry 
   */
  constructor(messageRegistry, local){
    this.local = local;
    this.msgRegistry = messageRegistry;
    this.stack = [];
  }

  isEmpty(){
    return this.stack.length === 0;
  }

  /**
   * @param {string} errorCode 
   * @param  {...any} args 
   */
  addError(errorCode, ...args){
    this.stack.push(this.msgRegistry.generateError(errorCode, args));

    return this;
  }

  /**
   * @param {string} errorCode 
   * @param  {any[]} args 
   */
  flush(errorCode, args = []){
    const list = this.stack;
    const regErr = this.msgRegistry.generateError(errorCode, args);
    
    this.stack = [];
    
    return new ErrorResponse(this.local, regErr.error, regErr.message, regErr.detail, list);
  }

}

class ErrorResponse {
  constructor(local, errorCode, message, detail, errors = []){
    this.local = local;
    this.error = errorCode;
    this.message = message;
    this.detail = detail;
    this.errors = errors;
  }
}

class RegistryError {
  constructor(code, message, detail){
    this.error = code;
    this.message = message;
    this.detail = detail;
  }
}

class MessageRegistry{

  /**
   * @param {RegistryError[]} registryErrors 
   */
  constructor(registryErrors = []){
    /** @type {Map<string, RegistryError>} */
    this.errors = new Map();

    for (const registryError of registryErrors) {
      this.register(registryError);
    }
  }

  /**
   * @param {RegistryError} registryError 
   */
  register(registryError){
    this.errors.set(registryError.error, registryError);

    return this;
  }

  /**
   * @param {string} errorCode 
   * @param {any[]} args 
   */
  generateError(errorCode, args = []){
    const regError = this.errors.get(errorCode);
    
    if (!regError) return new RegistryError("000000", "unknown error", "this error has not been implemented");
    
    return new RegistryError(
      errorCode,
      this.replaceIdentifiers(regError.message, ...args),
      this.replaceIdentifiers(regError.detail, ...args),
    );
  }

  /**
   * @param {string} str 
   * @param {...any} args 
   */
  replaceIdentifiers(str, ...args){
    const r = /{(\d+)}/g;

    return str.replace(r, (match, num) => {
      return args[num] !== undefined || args[num] !== null 
        ? args[num]
        : match;
    });
  }
}

module.exports = {
  RegistryError,
  ErrorResponse,
  MessageRegistry,
  HttpErrorFactory,
  ErrorStack,
};