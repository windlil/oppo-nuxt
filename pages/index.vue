<script setup lang="ts">
import { useHomeStore } from '@/store'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore) as any
</script>

<template>
  <div class="home">
    <div class="wrapper">
      <swiper :banners="banners"></swiper>
      <tab-category :category="categorys"></tab-category>
      <section-title title="Find N 系列"></section-title>
      <grid-view :products="categorys[1]"></grid-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>