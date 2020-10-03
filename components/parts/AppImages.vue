<template>
  <p class="app-images">
    <a :href="link">
      <lazy-component
        class="images-wrapper"
        :class="{
          'banner' : isBanner,
          'special-banner' : isSpecial
        }"
      >
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
    isBanner: Boolean,
    isSpecial: Boolean,
  },
}
</script>

<style scoped>
.app-images > a {
  @apply block cursor-pointer duration-100;
}

.app-images .images-wrapper {
  @apply relative flex items-center justify-center;
}

.app-images img {
  /* @apply absolute w-full duration-100 */
}

.app-images > a:hover {
  @apply opacity-80;
}

.app-images .special-banner {
  width: 680px;
  height: 326px;
}

.app-images .banner > img {
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 100%;
  max-height: 100%;
  @apply absolute w-full;
}
</style>
