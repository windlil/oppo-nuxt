import myRequest from './index'
import type { IResultData } from './index'

type Type = 'oppo' | 'onePlus' | 'intelligent'

export const getHomeInfo =  (type?: Type): any => {
  return myRequest.get<IResultData<any>>('/home/info', {
    type: type ?? 'oppo'
  })
}