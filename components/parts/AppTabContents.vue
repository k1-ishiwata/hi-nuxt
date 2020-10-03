<template>
  <div class="app-tab-contents">
    <transition>
      <section class="tab-contents"
               :key="currentKey" >
        <slot name="contents" />
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    currentKey: String,
  },
}
</script>

<style scoped>
.app-tab-contents {
  @apply relative overflow-hidden bg-white;
}

.app-tab-contents .tab-contents {
  transition: all .5s ease;
  @apply w-full;
}

/* トランジション用スタイル */
.v-leave-active {
  @apply absolute;
}

.v-enter {
  transform: translateX(-100%);
}

.v-leave-to {
  transform: translateX(100%);
}
</style>