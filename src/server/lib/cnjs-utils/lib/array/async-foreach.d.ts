import { IAsyncPredicate } from "./types";

export function asyncForEach<T>( arr: T[], predicate: IAsyncPredicate<T>, parallel: boolean ): Promise<void>
export function linearAsyncForEach<T>( arr: T[], predicate: IAsyncPredicate<T>): Promise<void>
export function parallelAsyncForEach<T>( arr: T[], predicate: IAsyncPredicate<T>): Promise<void>