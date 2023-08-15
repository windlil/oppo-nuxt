<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="section-title">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
.section-title {
  padding-top: 60px;
  padding-bottom: 22px;
  font-size: 24px;
  font-weight: 500;
}
</style>