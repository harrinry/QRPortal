import IOCContainer from "./container";
import IOCResolution from "./resolution";

export interface IFactoryFunction<T> {
  (context: IOCContainer):T
}
 
export function build(resolution: IOCResolution, container: IOCContainer): any
export function resolve(resolution: IOCResolution, container: IOCContainer): any
export function resolveDependencies(resolution: IOCResolution, container: IOCContainer): any[]
export function createFactory<T>(container: IOCContainer, factoryFunction: IFactoryFunction<T>): () => ReturnType<IFactoryFunction<T>>
export function createAutoFactory(resolution: IOCResolution, container: IOCContainer): () => ReturnType<IFactoryFunction<T>>