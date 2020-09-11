<template>
  <ul class="button-list">
    <slot name="item" />
  </ul>
</template>

<style scoped>
.button-list {
  @apply flex items-center flex-wrap -ml-8 -mb-16;
}

.button-list /deep/ li {
  @apply pl-8 pb-16;
}
</style>
