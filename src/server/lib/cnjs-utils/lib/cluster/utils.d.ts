
export enum ClusterTargets {
  "master",
  "workers",
  "all",
}

export interface onClusterExeErrorHandler extends Function{
  ( error: Error ): void
}

export interface clusterCallbackExe {
  ( callback: CallableFunction, onError: onClusterExeErrorHandler): void
}

export function getCoreCount(): number

export function clusterBlock( target: ClusterTargets | number ): clusterCallbackExe