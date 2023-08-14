<script setup lang="ts">
import { getHomeInfo } from '@/service/home'

const { data }  = await getHomeInfo('oppo')
console.log(data.value)
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
