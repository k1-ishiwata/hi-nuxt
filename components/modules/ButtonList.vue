<template>
  <ul class="button-list"
      :class="{ 'mt-20' : isMargin }"
  >
    <slot name="item" />
  </ul>
</template>

<script>
export default {
  props: {
    isMargin: Boolean,
  }
}
</script>

<style scoped>
.button-list {
  @apply flex items-center flex-wrap -ml-8 -mb-16;
}

.button-list.mt-20 {
  @apply mt-20;
}

.button-list /deep/ li {
  @apply pl-8 pb-16;
}
</style>
