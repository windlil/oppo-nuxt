<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { IBanner } from 'store/types';

interface Props {
  banners: IBanner[]
}

defineProps<Props>()
</script>

<template>
  <div class="swiper">
    <el-carousel height="480px" :interval="5000">
      <el-carousel-item  v-for="(item, index) in banners" :key="index">
        <img class="pic-str" :src="item.picStr" alt="OPPO">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.swiper {
    padding-top: 36px;
    position: relative;
    .pic-str {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .dots {
        height: 40px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        text-align: center;

        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            margin-right: 10px;
            background-color: #fff;
            opacity: 0.8;
            cursor: pointer;
        }
        .active {
            background-color: transparent;
            border: 2px solid #fff;
            width: 12px;
            height: 12px;
            position: relative;
            top: 1px;
        }
    }
}
</style>