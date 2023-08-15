<script setup lang="ts">
import type { ICategory } from '../../store/types'

interface Props {
  products: ICategory
}

defineProps<Props>()
</script>

<template>
  <div class="grid-view">
    <template v-for="(item, index) in products.productDetailss" :key="index">
      <view-item :product="item"></view-item>
    </template>
  </div>
</template>

<style scoped lang="scss">
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>