<script setup lang="ts">
import { useHomeStore } from '@/store/index'

const homeStore = useHomeStore()
homeStore.fetchHomeInfoData('oppo')
</script>

<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <nav-bar></nav-bar>
    <slot></slot>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>
