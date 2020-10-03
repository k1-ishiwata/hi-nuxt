<template>
  <div class="footer-contents-list">
    <slot name="contents" />
    <slot name="item" />
  </div>
</template>

<style scoped>
.footer-contents-list {
  @apply flex flex-wrap;
}

.footer-contents-list /deep/ > div {
  @apply w-1/2;
}

.footer-contents-list /deep/ > div > div + div {
  @apply mt-8;
}

.footer-contents-list /deep/ .item {
  @apply flex flex-wrap;
}
</style>
