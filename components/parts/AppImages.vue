<template>
  <p class="app-images">
    <a :href="link">
      <lazy-component>
        <img :src="src"
             :alt="alt"
             :width="width"
             :height="height"
        >
      </lazy-component>
    </a>
  </p>
</template>

<script>
export default {
  props: {
    link: String,
    src: String,
    alt: String,
    width: String,
    height: String,
    isSide: Boolean,
  },
}
</script>

<style scoped>
.app-images img {
  width: 100%;
  transition: .1s;
}

.app-images img:hover {
  @apply opacity-80;
}
</style>
