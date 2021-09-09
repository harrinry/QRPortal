
export class RegistryError {
  constructor(code: string, message: string, detail: string)
  public readonly error: string
  public readonly message: string
  public readonly detail: string
}

export class ErrorResponse {
  constructor(local: string, errorCode: string, message: string, detail: string, errors: RegistryError[])
  public readonly error: string
  public readonly message: string
  public readonly detail: string
  public readonly local: string
  public readonly errors: RegistryError[]
}

export class HttpErrorFactory{

  protected msgRegistries: Map<string, MessageRegistry>
  
  constructor()

  public createError(local: string, errorCode: string, ...args: string[] | number[]): ErrorResponse
  public registerErrCodes(local: string, ...registryErrors: RegistryError): this
  public createErrorStack(local: string): ErrorStack
}

export class ErrorStack{

  protected msgRegistry: MessageRegistry
  protected stack: RegistryError[]
  protected local: string

  constructor(messageRegistry: MessageRegistry, local: string)

  public isEmpty(): boolean
  public addError(errodCode: string, ...args: string[]): this
  public flush(errodCode: string, args: string[]): ErrorResponse[]
}

export class MessageRegistry{

  protected errorCodes: Record<string, string>
  
  constructor(errorCodes: Record<string, string>)

  protected generateError(errorCode: strign, args: any[]): string
  protected replaceIdentifiers(msg: string, ...args: any[]): string;
  public register(errorCode: string, message: string): this
}