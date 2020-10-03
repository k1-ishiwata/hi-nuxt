<template>
  <div class="head-column">
    <div class="column-wrapper">
      <slot name="icon" />
      <h2 :class="[ 'column-title', { 'fz-24': isLarge }]">
        <slot name="title" />
      </h2>
    </div>
    <slot name="lead"/>
  </div>
</template>

<script>
export default {
  props: {
    isLarge: Boolean,
  },
}
</script>

<style scoped>
.head-column .column-wrapper {
  background: theme('colors.accent');
  @apply relative flex items-center py-8 px-12 font-bold;
}

.head-column .column-title {
  line-height: 1.2;
  font-size: theme('fontSize.fz16');
  @apply text-white;
}

.head-column .column-title.fz-24 {
  font-size: theme('fontSize.fz24');
}

.head-column > .column-wrapper::before {
  content: "";
  width: 0;
  height: 0;
  border-width: 0 20px 20px 0;
  border-color: transparent #ffffff transparent transparent;
  @apply absolute top-0 right-0 border-solid;
}

.head-column /deep/ .icon {
  flex-shrink: 0;
  @apply mr-4 text-white;
}

.head-column /deep/ p {
  line-height: 1;
  font-size: theme('fontSize.fz12');
  background: theme('colors.base');
  @apply flex items-center text-white py-8 px-12;
}
</style>