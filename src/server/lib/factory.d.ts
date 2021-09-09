export interface Factory<T> {
  (data: Object): T
}