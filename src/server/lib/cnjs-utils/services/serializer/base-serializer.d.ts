
export class BaseSerializer<T> {
  Ctor: T;
  constructor(Ctor: T)
  serialize(httpResponse: any): T
  serialize(httpResponse: Array<any>): Array<T>
  __serializeList(httpResponse: Array<any>): Array<T>
  abstract __serialize(httpResponse: any): T
}