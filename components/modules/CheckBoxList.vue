<template>
  <ul class="check-box-list">
    <slot name="item" />
  </ul>
</template>

<style scoped>
.check-box-list {
  @apply flex items-center flex-wrap -ml-14 -mb-14;
}

.check-box-list /deep/ li {
  @apply pl-14 pb-14;
}
</style>
