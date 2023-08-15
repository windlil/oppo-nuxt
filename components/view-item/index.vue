<script setup lang="ts">
import { IProductDetail } from '../../store/types';


interface Props {
  product: IProductDetail
}

defineProps<Props>()
</script>

<template>
  <div class="view-item">
    <img :src="product.url" alt="">
    <div class="item-center">
      <span></span>
      <span></span>
    </div>
    <div class="item-footer">

    </div>
  </div>
</template>

<style scoped lang="scss">
.view-item {
  width: 20%;
  height: 300px;
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
  }
}
</style>