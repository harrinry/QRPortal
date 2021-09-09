
export interface HttpErrorObj {
  code: string
  message: string
  arguments: string[] | number[]
}

export class HttpErrorFactory{

  protected msgRegistry: MessageRegistry
  
  constructor( errorCodes: Record<string, string> )

  createError(errorCode: string, ...args: string[] | number[] ): HttpErrorObj
  registerErrCode(errorCode: string, msg: string): this
  createErrorStack(): ErrorStack
}

export class ErrorStack{

  msgRegistry: MessageRegistry
  stack: HttpErrorObj[]

  constructor( messageRegistry: MessageRegistry)

  isEmpty(): boolean
  addError( errodCode: string, ...args: string[] | number[]): this
  flush(): HttpErrorObj[]
}

export class MessageRegistry{

  protected errorCodes: Record<string, string>
  
  constructor(errorCodes: Record<string, string>)

  register( errorCode: string, message: string ): void
  generateMessage( errorCode: strign, ...args: string[] | number[] ): string

  protected replaceIdentifiers( msg: string, ...args: string[] | number[] ): string;
}