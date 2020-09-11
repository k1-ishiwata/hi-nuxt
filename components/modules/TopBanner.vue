<template>
  <div class="top-banner">
    <slot name="item" />
  </div>
</template>

<script>
import AppImages from '~/components/parts/AppImages.vue'

export default {
  components: {
    AppImages,
  },
  
}
</script>

<style scoped>
.top-banner {
  @apply flex items-center justify-center pb-20;
}

.top-banner /deep/ div {
  width: 540px;
  height: 135px;
}

.top-banner /deep/ div + div {
  @apply ml-20;
}
</style>
