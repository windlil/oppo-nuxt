<script setup lang="ts">
import { useHomeStore } from '@/store/index'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore) as any
homeStore.fetchHomeInfoData('oppo')
</script>

<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <nav-bar :navbars="navbars"></nav-bar>
    <slot></slot>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>
