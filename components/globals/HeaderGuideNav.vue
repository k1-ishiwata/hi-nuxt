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
  border-bottom-width: 5px;
  border-color: theme('colors.base');
  background: theme('colors.accent');
  @apply flex justify-center border-solid ;
}

.header-guide-nav > ul {
  width: theme('width.wrapper-common');
  @apply flex items-center;
}

.header-guide-nav > ul /deep/ > li {
  @apply relative w-full h-full;
}

.header-guide-nav > ul /deep/ > li:first-child {
  min-width: 67px;
  max-width: 67px;
}

.header-guide-nav > ul /deep/ > li:first-child::before {
  content: "";
  width: 1px;
  height: 36px;
  display: block;
  background: #D4D4D4;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.header-guide-nav > ul /deep/ > li::after {
  content: "";
  width: 1px;
  height: 38px;
  display: block;
  background: theme('colors.border-light-gray');
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  @apply absolute;
}

.header-guide-nav > ul /deep/ > li > a {
  font-size: theme('fontSize.fz14');
  @apply relative h-full flex items-center justify-center font-bold text-white no-underline;
}

.header-guide-nav /deep/ .drop-item {
  font-size: theme('fontSize.fz14');
  @apply relative h-full flex items-center justify-center font-bold text-white no-underline;
}

/* .header-guide-nav > ul /deep/ > li:first-child > a {
  border-color: theme('colors.border-light-gray');
  @apply border-solid border-l-1;
} */

.header-guide-nav > ul /deep/ > li .icon-triangle {
  position: absolute;
    right: 8px;
    bottom: 8px;
    transform: rotate(90deg);
  @apply 
}
</style>
