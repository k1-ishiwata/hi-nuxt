<template>
  <ul class="footer-guide-list">
    <slot name="item" />
  </ul>
</template>

<style scoped>
.footer-guide-list {
  @apply flex justify-start -ml-20 -mb-20;
}

.footer-guide-list /deep/ li {
  @apply pl-20 pb-20;
}

.footer-guide-list /deep/ a {
  height: 24px;
  font-size: theme('fontSize.fz16');
  color: theme('colors.accent');
  @apply flex items-center font-bold;
}

.footer-guide-list /deep/ a:hover {
  @apply underline;
}
</style>
