
export type ParameterConvention = 
  | "SNAKECASE"
  | "PASCALCASE"
  | "CAMELCASE"
  | "PARAMCASE"

export const parameterConvention = {
  SNAKECASE: "SNAKECASE",
  PASCALCASE: "PASCALCASE",
  CAMELCASE: "CAMELCASE",
  PARAMCASE: "PARAMCASE",
}

export class Serializer {

  constructor(convention: ParameterConvention)
  protected readonly convention: ParameterConvention

  public readonly serialize<T>(array: Array<Object>, Model: T): Array<InstanceType<T>>
  public readonly serialize<T>(data: Object, Model: T): InstanceType<T>
  public readonly serialize<T>(array: Array<Object>, Model: T, ...params: any[]): Array<InstanceType<T>>
  public readonly serialize<T>(data: Object, Model: T, ...params: any[]): InstanceType<T>
  protected __serialize<T>(data: Object, Model: T): InstanceType<T>
  protected __serialize<T>(data: Object, Model: T, ...params: any[]): InstanceType<T>
  private __serializeArray<T>(array: Array<Object>, Model: T): Array<InstanceType<T>>
  private __serializeArray<T>(array: Array<Object>, Model: T, ...params: any[]): Array<InstanceType<T>>
  private __matchConvention(paramName: string): string
}