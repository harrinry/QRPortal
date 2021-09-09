import { IAsyncReducePredicate } from "./types";

export function asyncReduce<T, D>( arr: T[], predicate: IAsyncReducePredicate<D, T>, initialValue: D, parallel: boolean ): Promise<D>
export function parallelAsyncReduce<T, D>( arr: T[], predicate: IAsyncReducePredicate<D, T>, initialValue: D ): Promise<D>
export function linearAsyncReduce<T, D>( arr: T[], predicate: IAsyncReducePredicate<D, T>, initialValue: D ): Promise<D>