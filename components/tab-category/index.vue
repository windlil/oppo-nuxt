<script setup lang="ts">
import { ICategory } from 'store/types';


interface Props {
  category: ICategory[]
}

defineProps<Props>()

function handleItemClick(item: ICategory) {

}
</script>

<template>
  <div class="tab-category">
    <template v-for="(item, index) in category" :key="index">
      <div class="category-item" @click="handleItemClick(item)">
        <img :src="item.picStr" alt="">
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.tab-category {
  width: 100%;
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;

  .category-item {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }
  }
}
</style>