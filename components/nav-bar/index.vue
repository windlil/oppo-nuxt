<script setup lang="ts">
const contentGroup = [
  {
    name: 'OPPO专区',
    link: ''
  },
  {
    name: 'OnePlus专区',
    link: ''
  },
  {
    name: '智能硬件',
    link: ''
  },
  {
    name: '服务',
    link: ''
  },
]
</script>

<template>
  <div class="nav-bar">
    <div class="wrapper content">
      <div class="content-left">
        OPPO 商城
      </div>
      <div class="content-center">
        <ul class="content-group">
          <li v-for="item in contentGroup" :key="item.name">
            <NuxtLink class="link">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <search></search>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  user-select: none;
  height: $navBarHeight;
  z-index: 99;
  border: 1px solid rgba(0, 0, 0, 0.06);

  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>div {
      display: flex;
      align-items: center;
    }

    .content-left {
      color: #00572a;
      font-size: 20px;
      font-weight: bold;
      padding-left: 20px;
    }

    .content-center {
      @include normalFlex();
      width: 600px;

      .link {
        cursor: pointer;
        font-size: 14px;
        color: #000;
        opacity: 0.55;
        margin: 0 10px;
      }

      .link:hover {
        opacity: 1;
      }

      .active .link {
        opacity: 1;
      }
    }

    .content-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>