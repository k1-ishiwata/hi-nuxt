<template>
  <ul class="area-list">
    <slot name="index" />
    <slot name="item"/>
  </ul>
</template>

<style scoped>
.area-list {
  @apply flex items-center flex-wrap;
}

.area-list:first-of-type {
  @apply flex items-center flex-wrap;
}

.area-list /deep/ li {
  @apply py-8;
}

.area-list /deep/ li > a {
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh12');
  color: theme('colors.base');
  border-color: theme('colors.base');
  @apply flex items-center px-4 border-solid border-r-1;
}

.area-list /deep/ li > a:hover {
  @apply underline;
}

.area-list /deep/ li:last-child > a {
  @apply  border-r-0;
}
</style>
