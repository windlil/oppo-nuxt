import myRequest from './index'
import type { IResultData } from './index'
import { IHomeState } from 'store/types'

export type HomeInfoType = 'oppo' | 'onePlus' | 'intelligent'

export const getHomeInfo =  (type?: HomeInfoType) => {
  return myRequest.get<IResultData<IHomeState>>('/home/info', {
    type: type ?? 'oppo'
  })
}