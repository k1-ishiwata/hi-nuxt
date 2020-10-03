<template>
  <a @click="$emit( 'input', id )"
     :class="[ 'app-tab-item', tabActive ]"
     :href="link"
  >
  <slot name="label" />
    <!-- {{ label }} -->
  </a>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
    link: String,
  },
  computed: {
    tabActive() {
      return this.value === this.id ? 'tab-active' : false
    }
  }
}
</script>

<style scoped>
.app-tab-item {
  font-size: theme('fontSize.fz20');
  line-height: theme('lineHeight.lh20');
  @apply inline-block w-full py-16 px-16 text-black bg-white font-bold text-center duration-100 cursor-pointer;
}

.app-tab-item:hover {
  background: theme('colors.active');
  @apply relative text-white z-10;
}

.app-tab-item.tab-active  {
  background: theme('colors.active');
  transition: 0;
  @apply relative text-white cursor-default z-10;
}

.app-tab-item.tab-active::before  {
  content: "";
  top: -2px;
  left: -2px;
  right: -2px;
  z-index: -1;
  background: theme('colors.active');
  @apply absolute bottom-0;
}

.app-tab-item:hover::before  {
  content: "";
  top: -2px;
  left: -2px;
  right: -2px;
  z-index: -1;
  background: theme('colors.active');
  @apply absolute bottom-0;
}
</style>