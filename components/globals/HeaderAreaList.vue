<template>
  <nav class="header-guide-nav">
    <ul>
      <slot name="navItem" />
    </ul>
  </nav>
</template>

<style scoped>
.header-guide-nav {
  min-height: 60px;
  border-bottom-width: theme('borderWidth.5');
  border-color: theme('colors.base');
  background: theme('colors.accent');
  @apply flex justify-center border-solid ;
}

.header-guide-nav ul {
  width: theme('width.wrapper-common');
  @apply flex items-center;
}

.header-guide-nav /deep/ li {
  width: 143px;
  @apply h-full py-8;
}

.header-guide-nav /deep/ li:first-child {
  width: 67px;
}

.header-guide-nav /deep/ a {
  font-size: theme('fontSize.fz14');
  @apply h-full flex items-center justify-center border-solid border-r-1 border-white font-bold text-white no-underline;
}

.header-guide-nav /deep/ li:first-child a {
  border-color: theme('colors.border-light-gray');
  @apply border-solid border-l-1;
}
</style>
