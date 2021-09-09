
interface IMiddleware {
  ( req: Express.Request, res: Express.Response, next: Function ): void
}

export function Middleware( ...middleware: IMiddleware[] ): PropertyDescriptor

export function Get( route: string | RegExp ): PropertyDescriptor

export function Put( route: string | RegExp ): PropertyDescriptor

export function Post( route: string | RegExp ): PropertyDescriptor

export function Patch( route: string | RegExp ): PropertyDescriptor

export function Delete( route: string | RegExp ): PropertyDescriptor

export function Options( route: string | RegExp ): PropertyDescriptor