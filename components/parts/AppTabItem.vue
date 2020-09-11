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
  font-size: 20px;
  line-height: 20px;
  @apply inline-block w-full py-16 px-16 text-black bg-white font-bold text-center duration-100 cursor-pointer;
}

.app-tab-item:hover {
  z-index: 10;
   background: #E81212;
  @apply relative text-white;
}

.app-tab-item.tab-active  {
  background: #E81212;
  transition: 0;
  z-index: 10;
  @apply relative text-white cursor-default;
}

.app-tab-item.tab-active::before  {
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    background: #E81212;
    bottom: 0;
    position: absolute;
    z-index: -1;
}

.app-tab-item:hover::before  {
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    background: #E81212;
    bottom: 0;
    position: absolute;
    z-index: -1;
}
</style>