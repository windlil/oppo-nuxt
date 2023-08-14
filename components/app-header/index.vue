<script setup lang="ts">

</script>

<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="content-left">
        <NuxtLink class="link">
          <span>OPPO官网</span>
        </NuxtLink>
        <NuxtLink class="link">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="content-right">
        <NuxtLink class="link"> 
          <span>下载OPPO商城APP</span>
        </NuxtLink>
        <NuxtLink class="link" to="/login">
          <i class="iconfont icon-user"></i>
          <span>登录</span>
        </NuxtLink>
        <NuxtLink class="link" to="/reg">
          <span>注册</span>
        </NuxtLink>
        <NuxtLink class="link">
          <i class="iconfont shoppingcart"></i>
          <span>购物车</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: $appHeaderHeight;
  background-color: #000;
  @include elementSticky(0, 110);

  .content {
    height: 100%;
    color: #bcbcbc;
    @include normalFlex();

    .link {
      color: #bcbcbc;
      margin-right: 15px;
      font-size: 12px;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      i {
        font-size: 12px;
        margin-right: 5px
      }
    }

    .content-left {
      @include normalFlex();
      align-items: center;
      justify-content: center;
    }

    .content-right {
      @include normalFlex();
      align-items: center;
      justify-content: center;
    }
  }
}
</style>