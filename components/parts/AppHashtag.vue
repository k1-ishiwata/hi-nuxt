<template>
  <a class="app-hashtag"
     :href="link"
  >
    #{{ name }}
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    name: String,
  },
}
</script>

<style scoped>
.app-hashtag {
  border-radius: 4px;
  font-size: theme('fontSize.fx14');
  line-height: theme('lineHeight.lh18');
  color: theme('colors.accent');
  border-color: theme('colors.accent');
  @apply inline-block py-4 px-8 border-2 border-solid bg-white cursor-pointer;
}
</style>
