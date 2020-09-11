<template>
  <div class="app-tab-contents">
    <transition >
      <section class="tab-contents" :key="currentKey" >
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
  position: relative;
  overflow: hidden;
  /* width: 280px; */
  /* border: 2px solid #000; */
  background: #ffffff;
}
.tab-contents {
  /* box-sizing: border-box; */
  /* padding: 10px; */
  width: 100%;
  transition: all 0.8s ease;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>