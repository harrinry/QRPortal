import { IAsyncPredicate } from "./types";

export function asyncMap<T>( arr: T[], predicate: IAsyncPredicate<T>, parallel: boolean ): Promise<ReturnType<IAsyncPredicate<T>>[]>

export function parallelAsyncMap<T>( arr: T[], predicate: IAsyncPredicate<T>): Promise<ReturnType<IAsyncPredicate<T>>[]>

export function linearAsyncMap<T>( arr: T[], predicate: IAsyncPredicate<T>): Promise<ReturnType<IAsyncPredicate<T>>[]>