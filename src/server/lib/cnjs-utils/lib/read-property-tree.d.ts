
export interface ExploreObjectOptions{
  default: any,
  returnLast: boolean
}

export default function rprop( obj: Object | Array<any>, objPath: string | string[], options: ExploreObjectOptions ): any