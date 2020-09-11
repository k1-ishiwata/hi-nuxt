<template>
  <lazy-component class="app-thumbnail">
    <img :src="src"
         :alt="alt"
         :width="width"
         :height="height"
    >
  </lazy-component>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    width: String,
    height: String,
  },
}
</script>
