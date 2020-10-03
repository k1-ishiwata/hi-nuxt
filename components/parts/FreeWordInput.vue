<template>
  <input type="text"
         class="free-word-input"
         :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
}
</script>

<style scoped>
.free-word-input {
  padding: 1px 0;
  border-color:theme('colors.border-word-input');
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh20');
  color: theme('colors.base');
  @apply w-full h-full flex items-center px-20 border-solid border-2 text-center bg-white outline-none;
}
</style>
