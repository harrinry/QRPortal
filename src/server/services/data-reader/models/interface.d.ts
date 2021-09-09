export interface DataReaderModel {
  id: string
  baseUrl: string
  new(id: string, baseUrl: string, data: Object)
  generateUrl(): string
}