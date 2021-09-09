export type Primitive = string | number | symbol

export interface IAsyncPredicate<T>{
  (element: T, index: number, arr: T[]): Promise<any>
}

export interface IAsyncReducePredicate<T, D>{
  (accumulator: T, element: D, index: number, arr: D[]): Promise<T>
}