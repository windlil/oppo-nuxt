import { defineStore } from 'pinia'
import type { HomeInfoType } from '@/service/home'
import { getHomeInfo } from '@/service/home'
import type { IHomeState } from './types'


export const useHomeStore =  defineStore('store', {
    state: (): IHomeState => {
      return {
        navbars: [],
        banners: [],
        categorys: []
      }
    },
    actions: {
      async fetchHomeInfoData(type: HomeInfoType) {
        const { data } = await getHomeInfo(type)
        this.navbars = data.value.data.navbars ?? []
        this.banners = data.value.data.banners ?? []
        this.categorys = data.value.data.categorys ?? []
        console.log(data)
      }
    }
})