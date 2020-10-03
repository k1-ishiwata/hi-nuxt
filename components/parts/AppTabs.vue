<template>
  <div class="app-tabs">
    <ul>
      <slot name="item" />
    </ul>
    <div class="tabs-label"
         v-if="isTitle"
    >
      <slot name="title" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTitle: Boolean,
  },
}
</script>

<style scoped>
.app-tabs > ul {
  @apply relative flex items-baseline;
}

.app-tabs > ul::after {
  content: "";
  bottom: -4px;
  height: 4px;
  background: theme('colors.active');
  @apply absolute left-0 w-full flex items-baseline z-10;
}

.app-tabs > ul /deep/ li {
  width: 25%;
}

.app-tabs > ul /deep/ li  {
  border-top: 2px solid #E0E0E0;
  border-left: 1px solid #E0E0E0;
  border-right: 1px solid #E0E0E0;
}

.app-tabs > ul /deep/ li:first-of-type   {
  border-left: 2px solid #E0E0E0;
}

.app-tabs > ul /deep/ li:last-of-type {
  border-right: 2px solid #E0E0E0;
}

.app-tabs .tabs-label {
  font-size: theme('fontSize.fz18');
  line-height: theme('lineHeight.lh18');
  background: theme('colors.active');
  @apply py-8 px-8 text-center text-white;
}
</style>
