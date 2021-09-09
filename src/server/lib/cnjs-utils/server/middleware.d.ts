
interface IBooleanFunction {
  ( req: Express.Request, res: Express.Response, next: Function ): boolean
}

interface IConditionalMiddleware {
  ( middleware: IMiddleware ): IMiddleware
}

interface IMiddleware {
  ( req: Express.Request, res: Express.Response, next: Function ): void
}

interface IErrorHandlerFunction{
  ( err: Error ): IMiddleware
}

export function maybe( condition: boolean ) : IConditionalMiddleware
export function maybe( condition: IBooleanFunction ) : IConditionalMiddleware

export function handlerFactory( cb: Function, res: Express.Response, next: Function ) : IErrorHandlerFunction

export function enoentHandler( res: Express.Request, next: Function ): IErrorHandlerFunction