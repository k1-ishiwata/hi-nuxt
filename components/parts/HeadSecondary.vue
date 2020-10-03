<template>
  <div class="head-secondary">
    <div class="secondary-wrapper">
      <slot name="icon" />
      <h2 class="secondary-title" >
        <slot name="title" />
      </h2>
      <div v-if="isButton"
           class="secondary-item"
      >
        <slot name="item" />
      </div>
    </div>
    <slot name="lead"/>
  </div>
</template>

<script>
export default {
  props: {
    isButton: Boolean,
  },
}
</script>

<style scoped>
.head-secondary  {
  @apply relative;
}

.head-secondary .secondary-wrapper {
  font-size: theme('fontSize.fz24');
  border-color: theme('colors.accent');
  background: theme('colors.accent');
  @apply relative flex items-center py-8 px-8 border-4 border-solid leading-none;
}

.head-secondary > .secondary-wrapper > .secondary-title {
  @apply text-white;
}

.head-secondary > .secondary-wrapper::after {
  content: "";
  top: -4px;
  right: -4px;
  width: 0;
  height: 0;
  border-width: 0 45px 44px 0;
  border-color: transparent #ffffff transparent transparent;
  @apply absolute border-solid;
}

.head-secondary /deep/ .icon {
  flex-shrink: 0;
  @apply mr-4 text-white;
}

.head-secondary .secondary-title {
  @apply font-bold;
}

.head-secondary /deep/ p {
  padding-top: 6px;
  padding-bottom: 6px;
  line-height: 1;
  font-size: theme('fontSize.fz16');
  background: theme('colors.base');
  @apply flex items-center px-12 text-white;
}

.head-secondary .secondary-item {
  @apply absolute right-0 py-4 z-10;
}

.head-secondary .secondary-item {
  content: "";
  height: 44px;
  top: -4px;
  right: -4px;
  @apply absolute bg-white;
}

.head-secondary .secondary-item::before {
  content: "";
  right: 100%;
  border-width: 0 45px 44px 0;
  border-color: transparent #ffffff transparent transparent;
  @apply absolute top-0 border-solid;
}

.head-secondary .secondary-item::after {
  content: "";
  @apply absolute top-0 right-0 w-full h-full block bg-white;
}
</style>