<template>
  <ul class="header-guide-nav-drop">
      <slot name="dropItem" />
  </ul>
</template>

<style scoped>
.header-guide-nav-drop {
  top: 100%;
  width: 219px;
  border-color: theme('colors.accent');
  @apply absolute left-0 px-12 bg-white border-solid border-4;
}

.header-guide-nav-drop.isOpen {
  display: block;
  z-index: 10;
}

.header-guide-nav-drop /deep/ > li + li {
  border-color: theme('colors.accent');
  @apply border-solid border-t-2;
}

.header-guide-nav-drop /deep/ > li > a {
  line-height: 30px;
  font-size: theme('fontSize.fz13');
  line-height: theme('lineHeight.lh30');
  color: theme('colors.base');
  @apply flex items-center no-underline cursor-pointer duration-100;
}

.header-guide-nav-drop /deep/ > li > a:hover > span {
  color: theme('colors.accent');
}

.header-guide-nav-drop /deep/ > li > a > span {
  @apply px-4;
}
</style>
