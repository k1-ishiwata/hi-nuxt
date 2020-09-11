<template>
  <a class="app-button" :href="link">
    <slot name="name" />
  </a>
</template>

<script>
export default {
  props: {
    link: String,
  },
}
</script>

<style scoped>
.app-button {
  height: 35px;
  z-index: 100;
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh14');
  border-color: theme('colors.parts-base');
  border-radius: theme('borderRadius.pills');
  @apply relative flex items-center justify-center px-10 border border-solid bg-white cursor-pointer duration-100;
}

.app-button:hover {
  opacity: .7;
  /* @apply opacity-75; */
}
</style>
