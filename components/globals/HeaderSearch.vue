<template>
  <p class="free-word-search">
    <input type="text">
    <FreeWordSearchButton />
  </p>
</template>

<script>
import IconSearch from '~/components/icons/IconSearch.vue'
import FreeWordSearchButton from '~/components/parts/FreeWordSearchButton.vue'

export default {
  components: {
    IconSearch,
    FreeWordSearchButton,
  },
}
</script>

<style scoped>
.free-word-search {
  height: 30px;
  @apply flex items-center;
}

.free-word-search > input {
  border-color: #E2E2E2;
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.20');
  color: theme('colors.base');
  @apply flex items-center outline-0 px-24 border-2 border-solid bg-white;
}
</style>
